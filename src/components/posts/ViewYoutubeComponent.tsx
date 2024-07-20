"use client";

import { useYouTubeDetails, extractVideoId } from "@/hooks/useYouTubeDetails";
import { Post } from "@/interfaces/Post";
import React, { useState } from "react";

const ViewYoutubeComponent = ({ post }: { post: Post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  console.log(post);
  const { videoDetails } = useYouTubeDetails(
    post?.post_url || "",
    post?.platform || ""
  );
 
  const videoId = extractVideoId(post?.post_url || "");

  return (
    <div>
      <section className="w-full flex flex-col gap-2 lg:gap-6 justify-center md:px-4 md:py-10 py-3 radial-gradient">
        <h1 className="font-semibold md:text-4xl text-2xl text-center capitalize ">
          {videoDetails?.title}
        </h1>
        <iframe
          className="w-10/12 mx-auto aspect-video mt-4 lg:mt-0 rounded-2xl"
          src={`https://www.youtube.com/embed/${videoId}?si=tIOBoKv5t1zONOI0&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
        <div className="w-10/12 mx-auto">
        <p className="text-2xl font-medium mb-1">Description</p>
        <p className="text-md lg:text-xl font-light lg:leading-8">
          {isExpanded
            ? videoDetails?.description
            : videoDetails?.description.slice(0, 300) + "..."}
        </p>
        <span
          className="cursor-pointer font-medium text-[#EE7048]"
          onClick={toggleDescription}
        >
          {isExpanded ? "Show less" : "Show more"}
        </span>
        </div>

      </section>
    </div>
  );
};

export default ViewYoutubeComponent;
