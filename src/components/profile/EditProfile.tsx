import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


const EditProfile = () => {
  const [tip, setTip] = useState<Number>(0);

  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center gap-2 h-10 rounded-lg bg-[#EE7048] text-white antialiased text-sm font-bold hover:bg-indigo-800 px-4">
        Edit Profile
      </DialogTrigger>
      <DialogContent>
        <h1 className="text-lg md:text-[22px] font-bold">
        Edit your Plethora profile
        </h1>
        <div className="mb-2">
          <label htmlFor="username" className="text-right mb-1">
            Name
          </label>
          <Input
            id="username"
            type="number"
            className="col-span-3 mt-3 border-gray-500 rounded-[10px]"
            onChange={(e) => {
              setTip(parseInt(e.target.value) || 0);
            }}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="username" className="text-right mb-1">
            Medium
          </label>
          <Input
            id="username"
            type="number"
            className="col-span-3 mt-3 border-gray-500 rounded-[10px]"
            onChange={(e) => {
              setTip(parseInt(e.target.value) || 0);
            }}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="username" className="text-right mb-1">
            Hashnode
          </label>
          <Input
            id="username"
            type="number"
            className="col-span-3 mt-3 border-gray-500 rounded-[10px]"
            onChange={(e) => {
              setTip(parseInt(e.target.value) || 0);
            }}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="username" className="text-right mb-1">
            YouTube
          </label>
          <Input
            id="username"
            type="number"
            className="col-span-3 mt-3 border-gray-500 rounded-[10px]"
            onChange={(e) => {
              setTip(parseInt(e.target.value) || 0);
            }}
          />
        </div>
        <Button className="mx-auto w-1/2 hover:bg-indigo-800 rounded-lg">Edit</Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
