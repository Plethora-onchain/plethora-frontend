"use client";

import { Gluten, Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "../ui/button";
import ConnectWallet from "./connect/ConnectButton";
import { useProfile } from "@/context/ProfileContext";

// import ConnectButton from "@/hooks/useConnectButton";

export const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const NavBar = (props: { isDashboard?: boolean }) => {
  const { isDashboard } = props;
  const { profile } = useProfile();

  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-transparent bg-opacity-70 backdrop-blur-lg backdrop-filter">
        <div className="mx-auto w-full px-4 max-w-screen-xl">
          <div className="flex h-24 items-center justify-between">
            <Link href="/" className={`text-5xl font-bold text-[#EE7048]`}>
              Plethora
            </Link>
            <div className="flex flex-row items-center gap-20">
              <Link
                href="/discover"
                className={`text-xl font-medium text-[#171717] hover:text-indigo-600`}
              >
                Discover
              </Link>
              {profile ? (
                <Link
                  href="/profile?create=true"
                  className={`text-xl font-medium text-[#171717] hover:text-indigo-600`}
                >
                  Create
                </Link>
              ) : null}

              <ConnectWallet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
