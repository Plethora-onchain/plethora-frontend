"use client";
import React from "react";
import { useParams } from "next/navigation";


import { NavBar } from "@/components/shared/Navbar";
import UserComponent from "@/components/user/UserComponent";
import Footer from "@/components/shared/Footer";

export default function User() {
  const params = useParams();
  return (
    <div className="relative min-h-[100vh]">
      {/* <Nav /> */}
      <NavBar />
      <div className="main-layout pt-24">
        <UserComponent/>
      </div>
      {/* <div className="absolute w-full bottom-0">
  <Footer/>
  </div> */}
    </div>
  );
}
