import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";
import uploadIcon from "../../assets/icons/upload-icon.svg";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useLocalStorageBlog } from "@/hooks/useCreatePost";
import { useAccount } from "@starknet-react/core";

// import { useCreatePost } from "@/hooks/useCreatePost";

const ImportPost = () => {
  const {  addPost, getPosts, updatePost, deletePost } = useLocalStorageBlog();
  const [platform, setPlatform] = useState("");
  const [post_url, setPostUrl] = useState("");
  const { address } = useAccount();

  const handleSubmit = async () => {
    try {
      const result = await addPost({
        post_url: post_url,
        platform: platform,
        creator_address: address      
      });
      console.log("Post added:", result);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
  const handlePlatformChange = (value:any) => {
    setPlatform(value);
  };
  return (
    // Add your JSX code here
    <Dialog>
      <DialogTrigger>
        {" "}
        <span className="border border-gray-300 px-4 py-1 cursor-pointer rounded-[10px] flex bg-[#171717] text-white">
          <Image src={uploadIcon} alt="" />
          <span className="ml-3">Import</span>
        </span>
      </DialogTrigger>
      <DialogContent className="rounded-[15px]">
        <DialogHeader>
          <DialogTitle>Import Post</DialogTitle>
          <DialogDescription>
            Import your content from an already existing platform. Enter the
            link to the content and the platform
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="items-center">
            <label htmlFor="name" className="text-right mb-3">
              Platform
            </label>
            <Select onValueChange={handlePlatformChange}>
              <SelectTrigger className="mt-3 border-gray-500 rounded-[10px]">
                <SelectValue placeholder="Select a platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Platforms</SelectLabel>
                  <SelectItem value="youtube">Youtube</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hashnode">Hashnode</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="items-center ">
            <label htmlFor="username" className="text-right mb-3">
              URL
            </label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3 mt-3 border-gray-500 rounded-[10px]"
              onChange={(e)=>{
                setPostUrl(e.target.value)
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="rounded-[10px]" onClick={()=>{
            handleSubmit();
            console.log("working");
            
          }}>
            Import
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImportPost;
