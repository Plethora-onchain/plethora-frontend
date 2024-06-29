import { NavBar } from "@/components/Navbar";
import Image from "next/image";
import illutsration from "../assets/images/landing/landing-illustration.png";
import { Button } from "@/components/ui/button";
import TopComponent from "@/components/landing/TopComponent";
import SponsorsComponent from "@/components/landing/Sponsors";
import FeaturedPosts from "@/components/landing/FeaturedPosts";

export default function Home() {
  return (
    <div>
      <div className="bg-[#FFF9DC] h-[100vh]">
        <NavBar />
        <TopComponent />
        <SponsorsComponent/>
        <FeaturedPosts/>
      </div>
    </div>
  );
}
