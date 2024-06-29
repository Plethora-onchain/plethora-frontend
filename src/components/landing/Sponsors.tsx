import Image from "next/image";
import React from "react";
import starknet from "../../assets/images/landing/SN-Stacked-Flat colour.png"
import onlydust from "../../assets/images/landing/onlydust.png";
import horus from "../../assets/images/landing/Horus.jpg"

const SponsorsComponent = () => {
  return (
    <div className="bg-white">
      <div className="py-8 gap-24 w-8/12 mx-auto flex justify-center items-center">
        <Image src={starknet} className="w-[150px]" alt=""/>
        <Image src={horus} className="w-[100px] h-auto" alt=""/>
        {/* <Image src={onlydust} className="w-[200px] h-auto" alt=""/> */}
      </div>
    </div>
  );
};

export default SponsorsComponent
