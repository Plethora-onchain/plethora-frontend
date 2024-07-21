"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import cardImage from "../../assets/images/card-image.png";
import Link from "next/link";
import { Post } from "@/interfaces/Post";
import { useYouTubeDetails } from "@/hooks/useYouTubeDetails";
import { useHashnodeArticleDetails } from "@/hooks/useHashnodeDetails";
import { useMediumArticleDetails } from "@/hooks/useMediumDetails";
import { ArrowRight } from "lucide-react";

export default function PostCard({ post }: { post: Post }) {
  const { videoDetails } = useYouTubeDetails(
    post?.post_url || "",
    post?.platform || ""
  );
  const { hashnodeDetails } = useHashnodeArticleDetails(
    post?.post_url || "",
    post?.platform || ""
  );
  const { mediumArticleDetails } = useMediumArticleDetails(
    post.post_url || "",
    post?.platform || ""
  );

  if (post.platform === "youtube") {
    return (
      <Link href={`/post/${post.id}`}>
        <Card className="w-[380px]  md:max-w-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl cursor-pointer">
          <Image
            src={videoDetails?.thumbnailUrl || cardImage}
            alt="Blog post cover image"
            width={400}
            height={100}
            className="rounded-t-2xl object-cover w-full h-[200px]"
          />
          <CardContent className="p-6 pt-3 space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {/* <CalendarDaysIcon className="w-4 h-4" /> */}
              <span>June 29, 2024</span>
            </div>
            <h3 className="text-xl font-bold">{videoDetails?.title}</h3>
            <p className="text-muted-foreground h-[100px]">
              {videoDetails?.description.slice(0, 120) + "..."}
            </p>
          </CardContent>
          <div className="rounded-b-2xl px-4 bg-gray-200 w-full flex items-center justify-between h-[60px]">
            <div className="flex w-full items-center">
              <Image
                src={
                  "https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="
                }
                className="h-10 w-10 rounded-full mr-3 object-cover"
                alt=""
                width={100}
                height={100}
              />

              <Link href="/user/untitled">
                <p className="text"> {"untitled"} </p>
                <p className="text-gray-600 text-xs">@{"untitled"} </p>
              </Link>
            </div>
            <ArrowRight />
          </div>
        </Card>
      </Link>
    );
  }

  if (post.platform === "hashnode") {
    return (
      <Link href={`/post/${post.id}`}>
        <Card className="w-[380px]  md:max-w-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl cursor-pointer">
          <Image
            src={hashnodeDetails?.coverImage || cardImage}
            alt="Blog post cover image"
            width={400}
            height={100}
            className="rounded-t-2xl object-cover w-full h-[200px]"
          />
          <CardContent className="p-6 pt-3 space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {/* <CalendarDaysIcon className="w-4 h-4" /> */}
              <span>June 29, 2024</span>
            </div>
            <h3 className="text-xl font-bold">{hashnodeDetails?.title}</h3>
            <p className="text-muted-foreground h-[100px]">
              {hashnodeDetails?.brief.slice(0, 150) + "..."}
            </p>
          </CardContent>
          <div className="rounded-b-2xl px-4 bg-gray-200 w-full flex items-center justify-between h-[60px]">
            <div className="flex w-full items-center">
              <Image
                src={
                  "https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="
                }
                className="h-10 w-10 rounded-full mr-3 object-cover"
                alt=""
                width={100}
                height={100}
              />

              <Link href="/user/untitled">
                <p className="text"> {"untitled"} </p>
                <p className="text-gray-600 text-xs">@{"untitled"} </p>
              </Link>
            </div>
            <ArrowRight />
          </div>
        </Card>
      </Link>
    );
  }
  if (post.platform === "medium") {
    return (
      <Link href={`/post/${post.id}`}>
        <Card className="w-[380px]  md:max-w-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl cursor-pointer">
          <Image
            src={mediumArticleDetails?.thumbnail || cardImage}
            alt="Blog post cover image"
            width={400}
            height={100}
            className="rounded-t-2xl object-cover w-full h-[200px]"
          />
          <CardContent className="p-6 pt-3 space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {/* <CalendarDaysIcon className="w-4 h-4" /> */}
              <span>June 29, 2024</span>
            </div>
            <h3 className="text-xl font-bold">{mediumArticleDetails?.title}</h3>
            <p className="text-muted-foreground h-[100px]">
              {mediumArticleDetails?.description.slice(0, 150) + "..."}
            </p>
          </CardContent>
          <div className="rounded-b-2xl px-4 bg-gray-200 w-full flex items-center justify-between h-[60px]">
            <div className="flex w-full items-center">
              <Image
                src={
                  "https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="
                }
                className="h-10 w-10 rounded-full mr-3 object-cover"
                alt=""
                width={100}
                height={100}
              />

              <Link href="/user/untitled">
                <p className="text"> {"untitled"} </p>
                <p className="text-gray-600 text-xs">@{"untitled"} </p>
              </Link>
            </div>
            <ArrowRight />
          </div>
        </Card>
      </Link>
    );
  }
  return (
    <Link href={`/post/${post.id}`}>
      <Card className="w-[380px] md:max-w-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl cursor-pointer">
        <Image
          src={cardImage}
          alt="Blog post cover image"
          width={400}
          height={100}
          className="rounded-t-2xl object-cover h-[200px] w-full"
        />
        <CardContent className="p-6 pt-3 space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {/* <CalendarDaysIcon className="w-4 h-4" /> */}
            <span>June 29, 2024</span>
          </div>
          <h3 className="text-xl font-bold">The Future of Web Development</h3>
          <p className="text-muted-foreground h-[100px]">
            Explore the latest trends and technologies shaping the future of web
            development. From AI-powered tools to...
          </p>
        </CardContent>
        <div className="rounded-b-2xl px-4 bg-gray-200 w-full flex items-center justify-between h-[60px]">
            <div className="flex w-full items-center">
              <Image
                src={
                  "https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="
                }
                className="h-10 w-10 rounded-full mr-3 object-cover"
                alt=""
                width={100}
                height={100}
              />

              <Link href="/user/untitled">
                <p className="text"> {"untitled"} </p>
                <p className="text-gray-600 text-xs">@{"untitled"} </p>
              </Link>
            </div>
            <ArrowRight />
          </div>
      </Card>
    </Link>
  );
}
