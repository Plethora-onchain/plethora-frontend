"use client";

import { NavBar } from "@/components/shared/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TextContent from "@/components/posts/TextContent";


export default function SinglePost() {
  const params = useParams();
  return (
    <div>
      {/* <Nav /> */}
      <NavBar />
      <div className="main-layout pt-36">
        <TextContent />
      </div>
      {/* </div> */}
    </div>
  );
}
