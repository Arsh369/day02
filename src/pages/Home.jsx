import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Marquee from "react-fast-marquee";
import Marqueee from "../components/Marqueee"
const Home = () => {
  return (
    <div className="flex">
      <div id="left" className="h-screen w-1/2 p-5">
        <div
          id="img"
          className="bg-[url('https://framerusercontent.com/images/yStE9KWzFrtJTVgDpvp7op43a0U.jpeg?scale-down-to=2048')] h-full w-full bg-cover bg-center bg-no-repeat rounded-2xl over"
        ></div>
      </div>
      <div id="right" className="h-screen w-1/2 p-5 flex flex-col justify-between">
        <Navbar />
        <HeroSection />
        <Marqueee />
      </div>
    </div>
  );
};

export default Home;
