"use client";
import React, { useEffect, useState } from "react";
import PostCard from "../posts/PostsCard";
import ProfileTab from "./ProfileTab";
import { useSearchParams } from "next/navigation";
import Create from "../create/Create";

const ProfileComponent = () => {
  const [activeTab, setActiveTab] = useState<string>("posts");
  const searchParams = useSearchParams();
  const create = searchParams?.get("create");

  useEffect(() => {
    const create = searchParams?.get("create");
    if (create) {
      setActiveTab("create");
    }
  }, [searchParams]);

  return (
    <>
      <div className="relative bg-white">
        <div
          className="mb-4 md:mb-0 w-full mx-auto "
          style={{ height: "150px" }}
        >
          <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-[#171717]"></div>
        </div>

        <div className="absolute top-[75px] z-10 mx-auto w-full">
          <ProfileTab onTabChange={setActiveTab} activeTab={activeTab} />

          {activeTab === "posts" ? (
            <div>
              {" "}
              <h3 className="text-2xl w-full xl:w-9/12 xl:mx-auto mt-8 px-6 xl:px-0 font-medium">
                My Posts
              </h3>
              <div className="mx-auto grid max-w-7xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-3">
                {/* <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard /> */}
              </div>
            </div>
          ) : (
            <div>
                <Create/>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
