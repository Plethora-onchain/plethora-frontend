"use client"

import React from "react";

import Image from "next/image";
import cardImage from "../../assets/images/card-image.png";
import Link from "next/link";

const TextContent = () => {
  return (
    <div className="mx-auto max-w-6xl  mb-20">
      <div className="">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "24em" }}
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
            src={cardImage}
            className="absolute left-0 top-0 w-full h-full h-25 z-0 object-cover"
            alt=""
          />
          <div className="p-4 absolute bottom-0 left-0 z-10">
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-100 leading-tight">
              {"Sample title"}
            </h2>
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
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {" "}
                  {"untitled"}{" "}
                </p>
                <Link className="font-semibold text-gray-400 text-xs" href="/user/untitled">
                  {/* {" "}
                      14 Aug{" "} */}
                  @{"untitled"}{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed prose lg:prose-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-5">Random Text Example</h1>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Introduction</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat justo sit amet augue facilisis, eu ullamcorper massa luctus. Phasellus et velit nec metus sollicitudin facilisis. Nam non libero eu nisi fermentum dictum. Cras fermentum, tortor a euismod condimentum, urna velit gravida nisi, eu vulputate purus dolor sed risus. Sed at tincidunt urna, eget dignissim metus. Sed tincidunt, orci ut faucibus accumsan, nunc metus tempus risus, id vestibulum tortor ligula id eros.
            </p>
          </div>
        
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Section 1</h2>
            <p className=" p-4 rounded mb-4">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis augue vel magna tristique vehicula. Nulla ac lacus odio. Integer egestas vehicula lacus, ac tincidunt elit feugiat sed. Duis varius lorem a magna cursus, at consectetur est tristique. Nulla facilisi. Morbi convallis est non ex tincidunt, quis finibus est cursus. Aliquam erat volutpat.
            </p>
            <p className="text-gray-600">
              Donec consectetur metus ac elit cursus, nec cursus sem vehicula. Fusce euismod lectus non mi aliquam, nec fermentum velit bibendum. Etiam eu neque at risus ullamcorper congue. Nullam at viverra arcu, sit amet fringilla nisi. Integer vehicula orci sit amet quam convallis, id feugiat nisi volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst.
            </p>
          </div>
        
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Section 2</h2>
            <p className="text-gray-600">
              Curabitur venenatis neque vel semper scelerisque. Nam et lacus vitae erat vestibulum viverra. Quisque lobortis nibh at dui dignissim, id fringilla urna fringilla. Aenean vel tortor nec felis pellentesque sollicitudin. Fusce consequat sapien eu mauris tincidunt, in cursus libero vulputate. Proin malesuada nunc at felis laoreet tincidunt. In ac vehicula mi, sed malesuada libero. Nulla facilisi. In sit amet nibh augue.
            </p>
            <p className=" p-4 rounded mt-4">
              Nunc tincidunt scelerisque elit, sit amet vehicula velit dapibus et. Vestibulum fringilla, lectus nec faucibus suscipit, erat ligula dictum leo, a facilisis nulla nisi non justo. Integer feugiat magna at felis euismod, eget malesuada eros fringilla. Aenean non urna magna. Donec eu nulla in odio vestibulum laoreet. In hac habitasse platea dictumst.
            </p>
          </div>
        
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Conclusion</h2>
            <p className="text-gray-600">
              Mauris auctor, urna a scelerisque dignissim, purus orci gravida risus, eget lacinia eros ex eget nisl. Sed non turpis et nisl tristique vehicula. In hac habitasse platea dictumst. Donec aliquam, libero ac tincidunt egestas, nisi mi sodales leo, nec eleifend nisl lectus sit amet libero. Aenean iaculis ultricies ante, at aliquet nunc luctus at. Etiam fringilla, lacus non convallis dictum, augue risus feugiat lacus, ac laoreet enim erat id urna. Phasellus gravida lorem vitae ligula convallis, non aliquet urna ultricies.
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default TextContent;
