import { NavBar } from "@/components/Navbar";
import Image from "next/image";
import illutsration from "../assets/images/landing/landing-illustration.png";
import { Button } from "@/components/ui/button";
import TopComponent from "@/components/landing/TopComponent";
import SponsorsComponent from "@/components/landing/Sponsors";

export default function Home() {
  return (
    <div>
      <div className="bg-[#FFF9DC] h-[100vh]">
        <NavBar />
        <TopComponent />
        <SponsorsComponent/>
      </div>
    </div>
  );
}
