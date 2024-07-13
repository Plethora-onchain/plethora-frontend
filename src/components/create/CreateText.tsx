"use client"
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Input } from "../ui/input";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';


const CreateText = () => {
  const [downloadURL, setDownloadURL] = useState(null);
  const [title, setTitle] = useState("");
  return (
    <div className="mb-5">
      {downloadURL ? (
        <div className="w-full h-40 px-4  rounded-md  cursor-pointer ">
          <Image
            className="h-full d-block mx-auto"
            loading="lazy"
            src={downloadURL}
            alt=""
          />
        </div>
      ) : (
        <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-indigo-500 focus:outline-none">
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            {/* {uploading ? (
                <span className="font-medium text-gray-600">
                  Upload is {uploadState}% done
                </span>
              ) : ( */}
            <span className="font-medium text-gray-600">
              Add Cover <small>(recommended: landscape image)</small>
            </span>
            {/* //   )} */}
          </span>
          <input
            type="file"
            name="file_upload"
            className="hidden"
            accept="image/gif,image/jpeg,image/png,image/heic,image/heif,image/webp,image/svg+xml,video/mov,video/mp4,video/ogg "
            //   onChange={}
          />
        </label>
      )}

      <div className="mt-4">
        <label className="block  font-medium leading-6 text-gray-900">
          Post Title
        </label>
        <div className="mt-2">
          <input
            id="name"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter title"
            required
            className="block w-full rounded-xl border border-gray-300 px-3 py-3 mb-3 text-gray-900 focus:border focus:border-indigo-500 focus:outline-none"
          />
        </div>
      </div>
      <ReactQuill
      className="min-h-[50vh] h-full"
      />
                
    </div>
  );
};

export default CreateText;
