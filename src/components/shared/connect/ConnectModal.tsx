"use client";
import React from "react";
import { Connector, useAccount, useConnect } from "@starknet-react/core";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import {
  getHubContract,
  ImplementationAddress,
  RegistryHash,
} from "@/constants/contracts";
import { useProfile } from "@/context/ProfileContext";

export default function ConnectModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  // const [isCreatingProfile, setIsCreatingProfile] = React.useState(false);
  const [error, setError] = React.useState("");
  const { connect, connectors } = useConnect();
  const { account } = useAccount();
  const { createProfile, isCreatingProfile, profile, userExists } =
    useProfile();

  const handleConnect = async (connector: Connector) => {
    if (!connector.available()) return;

    try {
      connect({ connector });
    } catch (error) {
      console.error(error);
      setError("Failed to connect. Please try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="max-w-[200px] h-10 rounded-lg bg-[#171717] text-white antialiased text-sm font-bold hover:bg-indigo-800 px-4"
          // onClick={() => setIsOpen(true)}
        >
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <div>
          {account && !userExists ? (
            <Button
              onClick={createProfile}
              disabled={isCreatingProfile}
              className="mt-4 w-full"
            >
              {isCreatingProfile ? "Creating Profile..." : "Create Profile"}
            </Button>
          ) : (
            <div>
              <h1 className="text-lg font-medium text-center">
                Connect Wallet
              </h1>

              <div className="mt-4 flex flex-row items-center justify-center gap-8">
                {connectors.map((connector: Connector) => (
                  <Button
                    key={connector.id}
                    onClick={() => handleConnect(connector)}
                    disabled={!connector.available() || isCreatingProfile}
                    className="flex flex-col items-center bg-white text-[#171717] hover:text-white justify-center gap-2 w-[100px] h-[100px]"
                  >
                    {typeof connector.icon === "object" &&
                      connector.icon.light && (
                        <Image
                          src={connector.icon.dark || ""}
                          width={100}
                          height={100}
                          className="w-12 h-12 mx-auto block"
                          alt={`${connector.name} icon`}
                        />
                      )}
                    <p>{connector.name}</p>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </DialogContent>
    </Dialog>
  );
}
