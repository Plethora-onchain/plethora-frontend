import { NavBar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer"
import TopComponent from "@/components/landing/TopComponent";
// import SponsorsComponent from "@/components/landing/Sponsors";
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
        <Footer/>
      </div>
    </div>
  );
}
