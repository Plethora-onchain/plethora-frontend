import { NavBar } from "@/components/Navbar";
import Image from "next/image";
import illutsration from "../assets/images/landing/landing-illustration.png";
import { Button } from "@/components/ui/button";
import TopComponent from "@/components/landing/TopComponent";
import SponsorsComponent from "@/components/landing/Sponsors";
import FeaturedPosts from "@/components/landing/FeaturedPosts";
import WeHelpYouGrow from "@/components/landing/WeHelpYouGrow";

export default function Home() {
  return (
    <div>
      <div className="bg-[#FFF9DC] h-[100vh]">
        <NavBar />
        <TopComponent />
        <WeHelpYouGrow/>
        {/* <SponsorsComponent/> */}
        <FeaturedPosts/>
      </div>
    </div>
  );
}
