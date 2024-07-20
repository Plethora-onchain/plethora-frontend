"use client";

import React from "react";
import Image from "next/image";
import CreateText from "./CreateText";
import uploadIcon from "../../assets/icons/upload-icon.svg";
import ImportPost from "../posts/ImportPost";

const Create = () => {
  return (
    <div className="w-10/12 mt-8 mb-5 mx-auto ">
      <div className="flex gap-4">
        <span className="border border-gray-300 px-4 py-1 cursor-pointer rounded-[10px]">
          Custom
        </span>

        <ImportPost />
      </div>
      <div className="mt-8">
        <CreateText />
      </div>
    </div>
  );
};

export default Create;
