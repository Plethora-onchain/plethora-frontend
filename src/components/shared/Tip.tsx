import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';

interface TipProps {
    text: string;
}

const Tip = () => {
 return(
    <Dialog>
    <DialogTrigger className='max-w-[200px] h-8 rounded-lg bg-[#171717] text-white antialiased text-sm font-bold hover:bg-indigo-800 px-4'>Tip</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
 )

};

export default Tip;