import { useMediumArticleDetails } from "@/hooks/useMediumDetails";
import { TailwindStyledContent } from "@/hooks/useTailwindStyledContent";
import { Post } from "@/interfaces/Post";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tip from "../shared/Tip";

const ViewMediumComponent = ({ post }: { post: Post }) => {
  const { mediumArticleDetails } = useMediumArticleDetails(
    post?.post_url || "",
    post?.platform || ""
  );
  console.log(mediumArticleDetails);
  
  return (
    <div className="mx-auto max-w-6xl  mb-20">
      <div className="">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "28em" }}
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7)",
            }}
          ></div>
          <Image
            loading="lazy"
            src={mediumArticleDetails?.thumbnail || ""}
            className="absolute left-0 top-0 w-full h-full h-25 z-0 object-cover"
            alt=""
            width={1000}
            height={1000}
          />
          <div className="p-4 absolute bottom-0 left-0 z-10">
            {/* <h2 className="text-2xl sm:text-4xl font-semibold text-gray-100 leading-tight">
                  {hashnodeDetails?.title}
                </h2> */}
          </div>
        </div>

        <div className="w-full max-w-screen-md mx-auto flex justify-between items-center">
          <div className="flex mt-3">
            <Image
              src={
                "https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="
              }
              className="h-10 w-10 rounded-full mr-2 object-cover"
              alt=""
              width={100}
              height={100}
            />

            <Link href="/user/untitled">
              <p className="text-lg"> {"untitled"} </p>
              <p className="text-gray-600 text-sm">@{"untitled"} </p>
            </Link>
          </div>
          <Tip />
        </div>
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed prose lg:prose-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-5">
            {mediumArticleDetails?.title}
          </h1>

          <div className="mb-10">
            <TailwindStyledContent
              content={mediumArticleDetails?.content || ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMediumComponent;
