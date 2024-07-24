"use client";
import React, { useEffect, useState } from "react";
import { NavBar } from "@/components/shared/Navbar";
import PostCard from "@/components/posts/PostsCard";
import SeacrchBar from "@/components/shared/SearchBar";
import { usePostController } from "@/hooks/usePostController";
import { Post } from "@/interfaces/Post";

function Discover() {
  const { getPosts } = usePostController();
  const [posts, setPosts] = useState<Post[]>();

  function fetchPosts() {
    getPosts()
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        console.error("Error getting posts:", error);
      });
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="main-layout pt-36">
        <div className="main-layout__top"></div>
        <div className="main-layout__main">
          {/* <h1 className="text-center text-4xl mb-3 text-white">News</h1> */}
          <div className="flex justify-center mb-8">
            <SeacrchBar />
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

          <div className="mx-auto grid max-w-7xl  grid-cols-1 gap-6 p-3 md:p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
          {
           posts && posts?.length> 0 && posts?.map((post) => (
              <PostCard key={post.id} post={post} />
            )) || <p>Loading...</p>
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
