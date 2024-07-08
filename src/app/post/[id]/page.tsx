"use client"

import { NavBar } from "@/components/shared/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";


export default function SinglePost() {
    const params = useParams()
  return (
    <div>
      {/* <Nav /> */}
      <NavBar />
      <div className="main-layout pt-36">

      </div>
      {/* </div> */}
    </div>
  );
}
