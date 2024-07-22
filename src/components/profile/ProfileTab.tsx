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
          className="h-20 w-20 rounded-2xl border-4 border-white mx-auto my-4"
          src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="
          alt=""
          width={100}
          height={100}
        />
        <div className="ml-2">
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
      </div>
      <EditProfile />
    </div>
  );
};

export default ProfileNav;
