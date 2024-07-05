import React from "react";
import { NavBar } from "@/components/Navbar";
import PostCard from "@/components/posts/PostsCard";
import SeacrchBar from "@/components/shared/SearchBar";

function Discover() {
  return (
    <div>
      <NavBar />
      <div className="main-layout pt-36">
        <div className="main-layout__top"></div>
        <div className="main-layout__main">
          {/* <h1 className="text-center text-4xl mb-3 text-white">News</h1> */}
         <div className="flex justify-center mb-8">
         <SeacrchBar/>
         </div>
          <div className="flex justify-center">
       
            <span className="inline-block px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-md font-semibold text-gray-700 mr-2 mb-2 pointer">
              All
            </span>
            <span className="inline-block px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-md font-semibold text-gray-700 mr-2 mb-2 pointer">
              Recent
            </span>
            <span className="inline-block px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-md font-semibold text-gray-700 mr-2 mb-2 pointer">
              Top
            </span>
          </div>

          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard /> 
            <PostCard /> 
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
