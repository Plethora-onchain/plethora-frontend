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

  const getProfile = useCallback(async () => {
    if (!account || !address) {
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
    setIsLoading(true);
    setError(null);
    try {
      const getNFTID = await NFTContract.get_user_token_id(address);
      const nftAddress = process.env.NEXT_PUBLIC_PLETHORA_NFT_ADDRESS;
      if (!nftAddress) {
        throw new Error("NFT address not found");
      }
      const profile_address = await tokenbound.getAccount({
        tokenContract:
          "0x00f910cee41eae0dd2dc412838ba72717d2a1702a833c5a312acc6c38742329a",
        tokenId: Number(getNFTID).toString(),
      });
      // console.log(profile_address);
      const fetchedProfile = await contract.get_profile(
        num.toHex(profile_address),
      );
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
  }, [account, address]);

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
      );
      await transaction.wait();
      await getProfile();
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

  // Return the context provider with the value
  return (
    <ProfileContext.Provider
      value={{
        profile,
        isCreatingProfile,
        isLoading,
        error,
        createProfile,
        getProfile,
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
