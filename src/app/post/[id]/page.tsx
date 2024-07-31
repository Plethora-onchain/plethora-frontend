"use client";

import { NavBar } from "@/components/shared/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TextContent from "@/components/posts/TextContent";
import ViewYoutubeComponent from "@/components/posts/ViewYoutubeComponent";
import { usePostController } from "@/hooks/usePostController";
import { Post } from "@/interfaces/Post";
import ViewMediumComponent from "@/components/posts/ViewMediumComponent";
import ViewHashnodeComponent from "@/components/posts/ViewHashnodeComponent";
import Footer from "@/components/shared/Footer";

export default function SinglePost() {
  const params = useParams();
  const { getPosts } = usePostController();
  const fetched_posts = getPosts();

  const single_post = fetched_posts.find((post) => post.id === params?.id);
  console.log(single_post);
  

  return (
    <div>
      <NavBar />
      <div className="main-layout pt-36">
        <div className="mx-auto">
          {single_post?.platform === "youtube" && (
            <ViewYoutubeComponent post={single_post} />
          )}
          {single_post?.platform === "medium" && (
            <ViewMediumComponent post={single_post} />
          )}
          {single_post?.platform === "hashnode" && (
            <ViewHashnodeComponent post={single_post} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
