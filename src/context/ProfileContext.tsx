"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useAccount } from "@starknet-react/core";
import {
  getHubContract,
  getNFTContract,
  ImplementationAddress,
  RegistryHash,
} from "@/constants/contracts";
import { TokenboundClient } from "starknet-tokenbound-sdk";
import { num } from "starknet";

interface ProfileContextType {
  profile: any | null;
  isCreatingProfile: boolean;
  isLoading: boolean;
  error: string | null;
  createProfile: () => Promise<void>;
  getProfile: () => Promise<void>;
  userExists: boolean;
  checkUserExists: () => Promise<boolean>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<any | null>(null);
  const [isCreatingProfile, setIsCreatingProfile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { account, address } = useAccount();
  const [userExists, setUserExists] = useState(false);

  const checkUserExists = useCallback(async (): Promise<boolean> => {
    if (address) {
      try {
        const balance = await getNFTContract(account).balanceOf(address);
        const exists = Number(balance) > 0;
        setUserExists(exists);
        return exists;
      } catch (error) {
        console.error("Error checking user existence:", error);
        setUserExists(false);
        return false;
      }
    }
    return false;
  }, [account, address]);

  const getProfile = useCallback(async () => {
    const exists = await checkUserExists();
    if (!account || !address) {
      setProfile(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const exists = await checkUserExists();
      if (!exists) {
        setProfile(null);
        return;
      }

      const contract = getHubContract(account);
      const NFTContract = getNFTContract(account);
      const tokenbound = new TokenboundClient({
        account: account,
        registryAddress:
          "0x4101d3fa033024654083dd982273a300cb019b8cb96dd829267a4daf59f7b7e",
        implementationAddress: ImplementationAddress,
        jsonRPC: `https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/mUiJxXhqBR87Lg7O8pmNJWgFJQ0DbcqG`,
      });

      const getNFTID = await NFTContract.get_user_token_id(address);
      // console.log(getNFTID);
      
      const nftAddress = process.env.NEXT_PUBLIC_PLETHORA_NFT_ADDRESS;
      if (!nftAddress) {
        throw new Error("NFT address not found");
      }
      const profile_address = await tokenbound.getAccount({
        tokenContract:nftAddress,
        tokenId: Number(getNFTID).toString(),
        salt: "1"
      });
      console.log("profile_address",  num.toHex(profile_address));
      const fetchedProfile = await contract.get_profile(
        num.toHex(profile_address),
      );
      console.log("fetchedProfile", fetchedProfile);
      const remappedProfile = {
        profile_address: num.toHex(fetchedProfile.profile_address),
        profile_owner: num.toHex(fetchedProfile.profile_owner),
        content_count: fetchedProfile.content_count,
        metadata_URI: fetchedProfile.metadata_URI,
      };
      setProfile(remappedProfile);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError("Failed to fetch profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [account, address, checkUserExists]);

  const createProfile = useCallback(async () => {
    if (!account) {
      setError("Please connect your wallet first");
      return;
    }
    const contract = getHubContract(account);
    setIsCreatingProfile(true);
    setError(null);
    try {
      const nftAddress = process.env.NEXT_PUBLIC_PLETHORA_NFT_ADDRESS;
      if (!nftAddress) {
        throw new Error("NFT address not found");
      }
      const transaction = await contract.create_profile(
        nftAddress,
        RegistryHash,
        ImplementationAddress,
        1,
      )
      console.log(transaction);
      
      // await transaction.wait();
   if(transaction){
    await getProfile();
   }
    } catch (error) {
      console.error("Error creating profile:", error);
      setError("Failed to create profile. Please try again.");
    } finally {
      setIsCreatingProfile(false);
    }
  }, [account, getProfile]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        isCreatingProfile,
        isLoading,
        error,
        createProfile,
        getProfile,
        userExists,
        checkUserExists,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};