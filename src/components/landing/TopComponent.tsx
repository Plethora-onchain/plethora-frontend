import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import illustration from "../../assets/images/landing/landing-illustration.png";
import laptop from "../../assets/images/landing/laptop.png";
import phone from "../../assets/images/landing/phone.png";
import screen from "../../assets/images/landing/screen.png";

const TopComponent = () => {
  return (
    <div className="pt-36 px-4 sm:w-11/12 md:w-10/12 mx-auto flex justify-between">
      <div className="text-[#171717]">
        {/* <p className="">lorem text</p> */}
        <h1 className="text-[56px] font-extrabold text-[#171717]">
          Monetize Your Passion,
          <br />
          Grow Your Audience
        </h1>
        <p className={`text-2xl mt-[24px] max-w-[700px]`}>
          Embark on a journey to transform your passion into profit while
          expanding your audience. Dive into a world where creativity meets
          opportunity, and every idea has the potential to grow.
        </p>
        <Button className="bg-[#EE7048] px-10 py-6 mt-12 rounded-2xl text-white text-lg hover:bg-[#EE7048]">
          Get Started
        </Button>
        <div className="flex gap-5 mt-8">
          <Image src={screen} alt="icon" className="w-12 h-12" />
          <Image src={laptop} alt="icon" className="w-12 h-12" />
          <Image src={phone} alt="icon" className="w-12 h-12" />
        </div>
      </div>
      <div className="relative">
        <div className="">
          <Image
            src={illustration}
            alt="illustration"
            className="w-full max-w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TopComponent;
