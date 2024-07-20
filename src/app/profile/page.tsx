"use client";
import React, { Suspense } from "react";
import { NavBar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ProfileComponent from "@/components/profile/ProfileComponent";

export default function Profile() {
  return (
    <div className="relative min-h-[100vh]">
      {/* <Nav /> */}
      <NavBar />
      <div className="main-layout pt-24">
        <Suspense>
        <ProfileComponent />
        </Suspense>
      </div>
      {/* <div className="absolute w-full bottom-0">
  <Footer/>
  </div> */}
    </div>
  );
}
