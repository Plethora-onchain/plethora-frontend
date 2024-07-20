"use client";

import React from "react";

import { Connector, useConnect } from "@starknet-react/core";
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

export default function ConnectModalParent() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { connect, connectors } = useConnect();

  return (

    <Dialog >
      <DialogTrigger className="max-w-[200px] h-10 rounded-lg bg-[#171717] text-white antialiased text-sm font-bold hover:bg-indigo-800 px-4">
        Connect Wallet
      </DialogTrigger>
      <DialogContent className="">
      <h1 className="text-lg font-medium text-center">
          Connect Wallet
        </h1>
        <div className="mt-4 flex flex-row items-center justify-center gap-8">
        {connectors.map((connector: Connector) => {
          return (
            <Button
              key={connector.id}
              onClick={async () =>
                connector.available() ? connect({ connector }) : null
              }
              disabled={!connector.available()}
              className="flex flex-col items-center bg-white text-[#171717] hover:text-white justify-center gap-2 w-[100px] h-[100px]"
            >
              {typeof connector.icon === 'object' && connector.icon.light && (
                <Image src={connector.icon.dark || ""} width={100} height={100}  className="w-12 h-12 mx-auto block" alt="" />
              )}
              <p className="">{connector.name}</p>
            </Button>
          );
        })}
      </div>
      </DialogContent>
    </Dialog>
  );
}
