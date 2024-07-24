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
  const [post, setPost] = useState<Post>();

  function fetchSinglePost() {
    getPosts()
      .then((response) => {
        const filteredPost = response.find((post) => post.id === params?.id);
        if (filteredPost) {
          setPost(filteredPost);
        } else {
          console.error("Post not found.");
        }
      })
      .catch((error) => {
        console.error("Error getting posts:", error);
      });
  }
  useEffect(() => {
    fetchSinglePost();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="main-layout pt-36">
        <div className="mx-auto">
          {post?.platform === "youtube" && <ViewYoutubeComponent post={post}/>}
          {post?.platform === "medium" && <ViewMediumComponent post={post} />}
          {post?.platform === "hashnode" && <ViewHashnodeComponent post={post}/>}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
