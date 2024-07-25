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
import { usePostController } from "@/hooks/usePostController";
import { useAccount } from "@starknet-react/core";

// import { useCreatePost } from "@/hooks/useCreatePost";

const ImportPost = () => {
  const { addPost } = usePostController();
  const [platform, setPlatform] = useState("");
  const [post_url, setPostUrl] = useState("");
  const { address } = useAccount();

  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  const handleSubmit = async () => {
    try {
      const result = await addPost({
        post_url: post_url,
        platform: platform,
        creator_address: address,
      });
      console.log("Post added:", result);
    } catch (error) {
      console.error("Error adding post:", error);
    } finally {
      closeModal();
      // setOpen(false)
    }
  };
  const handlePlatformChange = (value: any) => {
    setPlatform(value);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        {" "}
        <span className="border border-gray-300 px-4 py-1 cursor-pointer rounded-lg flex bg-[#171717] hover:bg-indigo-800 text-white">
          <Image src={uploadIcon} alt="" />
          <span className="ml-3">Import</span>
        </span>
      </DialogTrigger>
      <DialogContent className="rounded-[15px]">
        <h1 className="text-lg md:text-[22px] font-bold">
          Import Your Content with Ease
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground -mt-2">
          Seamlessly bring your content from other platforms into our app. Just
          enter the link to your content and the platform it&rsquo;s hosted on,
          and we&apos;ll take care of the rest!
        </p>
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
              onChange={(e) => {
                setPostUrl(e.target.value);
              }}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-1/2 mx-auto rounded-[10px]"
          onClick={() => {
            handleSubmit();
            console.log("working");
          }}
        >
          Import
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ImportPost;
