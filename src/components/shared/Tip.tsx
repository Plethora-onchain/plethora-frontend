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
      <DialogTrigger className="max-w-[200px] h-8 rounded-lg bg-[#171717] text-white antialiased text-sm font-bold hover:bg-indigo-800 px-4">
        Tip
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
        <Button className="mx-auto w-1/2">Tip</Button>
      </DialogContent>
    </Dialog>
  );
};

export default Tip;
