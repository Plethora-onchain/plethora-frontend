"use client"

import React from "react";
import Image from "next/image";
import CreateText from "./CreateText";

const Create = () => {
  return (
    <div className="w-10/12 mt-8 mb-5 mx-auto ">
      <div className="flex gap-4">
      <span className="border border-gray-300 px-2 py-1 text-sm rounded-[10px]">
        Custom
      </span>

      <span className="border border-gray-300 px-2 py-1 text-sm rounded-[10px]">Import  </span>
      </div>
        <div className="mt-8">
            <CreateText/>
        </div>

    </div>
  );
};

export default Create;
