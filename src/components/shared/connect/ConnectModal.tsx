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

    <Dialog>
      <DialogTrigger className="max-w-[200px] h-8 rounded-lg bg-[#171717] text-white antialiased text-sm font-bold hover:bg-indigo-800 px-4">
        Connect Wallet
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
 
        </DialogHeader>
        <div className="flex flex-col gap-2">
        {connectors.map((connector: Connector) => {
          return (
            <Button
              key={connector.id}
              onClick={async () =>
                connector.available() ? connect({ connector }) : null
              }
              disabled={!connector.available()}
              className="flex flex-row items-center justify-start gap-4 w-96"
            >
              {typeof connector.icon === 'object' && connector.icon.light && (
                <Image src={connector.icon.dark} className="w-10 h-10" alt="" />
              )}
              <p className="">Connect {connector.name}</p>
            </Button>
          );
        })}
      </div>
      </DialogContent>
    </Dialog>
  );
}
