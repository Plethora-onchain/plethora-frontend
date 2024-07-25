"use client";

import React from "react";
import Image from "next/image";
import EditProfile from "./EditProfile";
interface TabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ProfileNav: React.FC<TabProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex items-center justify-between w-10/12 mx-auto bg-[#eeeeee] rounded-2xl px-6">
      <div className="text-center flex items-center">
        <Image
          className="h-20 w-20 rounded-full border-4 border-white mx-auto my-4"
          src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="
          alt=""
          width={100}
          height={100}
        />
        <div className="ml-3">
          <p className="text-xl text-gray-700 items-center">{"untitled"}</p>
          <p className="text-sm text-gray-700 items-center">@{"Untitled"}</p>
        </div>
      </div>
      <div className="flex justify-center gap-12 mx-auto">
        <span
          className={`text-gray-800 cursor-pointer pb-2 border-b-4 ${
            activeTab === "posts" ? "border-[#171717]" : ""
          }`}
          onClick={() => onTabChange("posts")}
        >
          My post(s)
        </span>
        <p
          className={`text-gray-800 cursor-pointer pb-2 border-b-4 ${
            activeTab === "create" ? "border-[#171717]" : ""
          }`}
          onClick={() => onTabChange("create")}
        >
          Create
        </p>
        <div className="flex">
          <div className="flex gap-2  items-center text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-coin"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <strong className="text-black text-1xl">{0}</strong>
            token(s)
          </div>
        </div>
      </div>
      <EditProfile />
    </div>
  );
};

export default ProfileNav;
