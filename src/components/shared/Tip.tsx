import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface TipProps {
  text: string;
}

const Tip = () => {
  const [tip, setTip] = useState<Number>(0);

  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center gap-2 h-10 rounded-lg bg-[#171717] text-white antialiased text-sm font-bold hover:bg-indigo-800 px-4">
      <GiftIcon className="w-5 h-5" />
        Tip the creator
      </DialogTrigger>
      <DialogContent>
        <h1 className="text-lg md:text-[22px] font-bold">
          🎉 Support Your Favorites 🎉
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground -mt-2">
          Loving the content? Now you can show your appreciation by tipping your
          favorite creators directly to their Plethora wallet!.
        </p>
        <div className="items-center mb-3">
          <label htmlFor="username" className="text-right mb-3">
            Tip amount
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
        <Button className="mx-auto w-1/2 rounded-lg hover:bg-indigo-800">Tip</Button>
      </DialogContent>
    </Dialog>
  );
};

export default Tip;

function GiftIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}