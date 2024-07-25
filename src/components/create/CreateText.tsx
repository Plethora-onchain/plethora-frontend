"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
// import { Input } from "../ui/input";
import { Button } from "../ui/button";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { usePostController } from "@/hooks/usePostController";
import { useAccount } from "@starknet-react/core";
import { usePostUpload } from "@/hooks/useCustomPosts";
import Loading from "../shared/Loading";


const CreateText = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { addPost } = usePostController();
  const { address } = useAccount();
  const router = useRouter();

  const {
    coverImage,
    setCoverImage,
    postUrl,
    coverImageUrl,
    uploading,
    setUploading,
    uploadProgress,
    setPost,
    uploadComplete,
  } = usePostUpload();

  useEffect(() => {
    const handlePostUploadComplete = async () => {
      if (uploadComplete && postUrl) {
        try {
          const result = await addPost({
            title: title,
            post_url: postUrl,
            platform: "custom",
            creator_address: address,
            img_url: coverImageUrl || "",
          });
          console.log("Post added:", result);
          // Reset form or navigate to a new page here
        } catch (error) {
          console.error("Error adding post:", error);
          setError("Failed to add post. Please try again.");
        }
        finally{
          router.push("/discover")
        }
      }
    };

    handlePostUploadComplete();
  }, [uploadComplete, postUrl, title, address, coverImageUrl, addPost]);

  const handleSubmit = async () => {
    setError(null);
    if (!title || !content) {
      setError("Please provide both title and content.");
      return;
    }
    try {
      setPost({ id: Date.now().toString(), title, content });
      setUploading(true);
    } catch (error) {
      console.error("Error starting upload:", error);
      setError("Failed to start upload. Please try again.");
      setUploading(false);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCoverImage(file);
    }
  };

  return (
    <>
    <div className="mb-5">
      {coverImageUrl ? (
        <div className="w-full h-40 px-4 rounded-md cursor-pointer">
          <Image
            className="h-full d-block mx-auto"
            loading="lazy"
            src={coverImageUrl}
            alt=""
            width={300}
            height={160}
          />
        </div>
      ) : (
        <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-indigo-500 focus:outline-none">
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            {uploading ? (
              <span className="font-medium text-gray-600">
                Upload is {uploadProgress.coverImage}% done
              </span>
            ) : (
              <span className="font-medium text-gray-600">
                Add Cover <small>(recommended: landscape image)</small>
              </span>
            )}
          </span>
          <input
            type="file"
            name="file_upload"
            className="hidden"
            accept="image/gif,image/jpeg,image/png,image/heic,image/heif,image/webp,image/svg+xml,video/mov,video/mp4,video/ogg"
            onChange={handleImageUpload}
          />
        </label>
      )}

      <div className="mt-4">
        <label className="block font-medium leading-6 text-gray-900">
          Post Title
        </label>
        <div className="mt-2">
          <input
            id="name"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
            className="block w-full rounded-xl border border-gray-300 px-3 py-3 mb-3 text-gray-900 focus:border focus:border-indigo-500 focus:outline-none"
          />
        </div>
      </div>
      <ReactQuill
        className="min-h-[50vh] h-full"
        value={content}
        onChange={setContent}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <Button
        onClick={handleSubmit}
        disabled={uploading}
        className="mt-4 mx-auto block px-12 h-10 py-2 bg-[#171717] hover:bg-indigo-800 text-white antialiased text-sm font-bold rounded-lg disabled:bg-gray-400"
      >
        {uploading ? "Uploading..." : "Submit Post"}
      </Button>
    </div>

    {
      uploading ? <Loading/> : ""
    }
    </>
  );
};

export default CreateText;