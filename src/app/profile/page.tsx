"use client";
import React from "react";
import { NavBar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ProfileComponent from "@/components/profile/ProfileComponent";

export default function Profile() {
  return (
    <div className="relative min-h-[100vh]">
      {/* <Nav /> */}
      <NavBar />
      <div className="main-layout pt-24">
        <ProfileComponent />
      </div>
      {/* <div className="absolute w-full bottom-0">
  <Footer/>
  </div> */}
    </div>
  );
}
