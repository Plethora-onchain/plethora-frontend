"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import PostCard from "../posts/PostsCard";
import { useLocalStorageBlog } from "@/hooks/useCreatePost";
import { Post } from "@/interfaces/Post";

const FeaturedPosts = () => {
  const { getPosts } = useLocalStorageBlog();
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
    <div className="bg-[#171717] ">
      <div className="w-full px-4 py-12 sm:w-11/12 md:w-10/12 mx-auto">
        <h2 className="text-4xl font-semibold text-white">Featured Posts</h2>
        <div className="flex flex-col md:flex-row mt-8 mx-auto gap-6 lg:gap-10">
          {(posts &&
            posts?.length > 0 &&
            posts?.map((post) => <PostCard key={post.id} post={post} />)) || (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default FeaturedPosts;
