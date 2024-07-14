import Image from "next/image";
import React from "react";
import PostCard from "../posts/PostsCard";

 const FeaturedPosts = () => {
  return (
    <div className="bg-[#171717] ">
      <div className="w-full px-4 py-12 sm:w-11/12 md:w-10/12 mx-auto">
        <h2 className="text-4xl font-semibold text-white">Featured Posts</h2>
        <div className="flex flex-col md:flex-row mt-8 mx-auto gap-6 lg:gap-10">
          <PostCard/>
          <PostCard/>
          <PostCard/>

        </div>
      </div>
    </div>
  );
};
export default FeaturedPosts