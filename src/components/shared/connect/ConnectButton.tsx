import React, { useEffect } from "react";
import { useAccount, useDisconnect } from "@starknet-react/core";
import ConnectModal from "./ConnectModal";
import { Contract, Provider, RpcProvider, constants, num } from "starknet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { getHubContract } from "@/constants/contracts";
import { useProfile } from "@/context/ProfileContext";

const ConnectWallet = () => {
  const { address, account } = useAccount();
  const { disconnect } = useDisconnect();
  const { profile, getProfile } = useProfile();
  // console.log(profile);

  // useEffect(() => {
  //   if (account) {
  //     getProfile();
  //   }
  // }, [account]);

  return (
    <div className="justify-between  flex flex-row px-4 p-2">
      {profile ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src={`https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI=`}
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-56 rounded-lg">
            <div className="flex items-center justify-center p-2">
              {/* <div className="grid gap-0.5 leading-none"> */}
              <div className="font-semibold">{`${profile.profile_address?.slice(
                0,
                8,
              )}...${profile.profile_address?.slice(-6)}`}</div>
            </div>
            {/* </div> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="#"
                className="flex items-center justify-center"
                prefetch={false}
              >
                <div className="h-4 w-4" />
                <span>Edit Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="#"
                className="flex items-center justify-center"
                prefetch={false}
              >
                <div className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div onClick={() => disconnect()} className="flex items-center">
                <div className="h-4 w-4" />
                <span className="text-red-700">Disconnect</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <ConnectModal />
      )}
    </div>
  );
};

export default ConnectWallet;
