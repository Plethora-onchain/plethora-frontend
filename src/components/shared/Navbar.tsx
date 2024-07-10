"use client";

import { Gluten, Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "../ui/button";

// import ConnectButton from "@/hooks/useConnectButton";

export const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const NavBar = (props: { isDashboard?: boolean }) => {
  const { isDashboard } = props;
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white bg-opacity-70 backdrop-blur-lg backdrop-filter">
        <div className="mx-auto w-full px-4 sm:w-11/12 md:w-10/12">
          <div className="flex h-24 items-center justify-between">
            <Link
              href="/"
              className={`text-5xl font-bold text-[#EE7048]`}
            >
              Plethora
            </Link>
            <div className="flex flex-row items-center gap-20">
              <Link
                href="/discover"
                className={`text-xl font-medium text-[#7248EE]`}
              >
                Discover
              </Link>
              <Link
                href="/discover"
                className={`text-xl font-medium text-[#7248EE]`}
              >
                Create
              </Link>
              <Button className="bg-[#EE7048] px-10 py-6 rounded-2xl text-white text-lg hover:bg-[#EE7048]">
                Get Started
              </Button>
              {/* <Link
              href="/"
              className={`text-xl text-[#7248EE] ${poppins.className}`}
            >
              Plethora
            </Link>
            <Link
              href="/"
              className={`text-xl text-[#7248EE] ${poppins.className}`}
            >
              Plethora
            </Link> */}
              {/* <Link
              href="/"
              className={`text-xl text-[#7248EE] ${poppins.className}`}
            >
              Plethora
            </Link> */}
            </div>
            {/* <w3m-button/> */}
            {/* <ConnectButton /> */}
            {/* <div className="space-x-6 text-gray-100"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};
