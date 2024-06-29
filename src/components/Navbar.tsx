"use client";

import { Gluten, Poppins } from "next/font/google";
import Link from "next/link";

// import ConnectButton from "@/hooks/useConnectButton";

export const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const NavBar = (props: { isDashboard?: boolean }) => {
  const { isDashboard } = props;
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-opacity-50 backdrop-blur-lg backdrop-filter">
        <div className="mx-auto w-full px-4 sm:w-11/12 md:w-10/12">
          <div className="flex h-24 items-center justify-between">
            <Link
              href="/"
              className={`text-3xl font-semibold text-[#EE7048] ${poppins.className}`}
            >
              Plethora
            </Link>
            <div className="flex gap-6">
            <Link
              href="/"
              className={`text  text-[#7248EE]`}
            >
              Plethora
            </Link>
            <Link
              href="/"
              className={`text text-[#7248EE] ${poppins.className}`}
            >
              Plethora
            </Link>
            <Link
              href="/"
              className={`text text-[#7248EE] ${poppins.className}`}
            >
              Plethora
            </Link>
            <Link
              href="/"
              className={`text text-[#7248EE] ${poppins.className}`}
            >
              Plethora
            </Link>
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
