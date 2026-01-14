import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-10">
      <button className="flex items-center gap-2 bg-emerald-900 px-4 py-1 rounded-2xl w-fit text-emerald-400">
        <p className="h-3 w-3 bg-emerald-500 rounded-full"></p> Now booking
      </button>
      <h1 className="text-6xl w-150 font-bold">
        I design & build products that{" "}
        <span className="text-gray-500">inspire</span>
      </h1>
      <div id="buttons" className="flex gap-4">
        <button className="px-5 py-2 bg-white text-black font-semibold rounded-3xl">
          Book a call
        </button>
        <button className="px-5 py-2 bg-gray-900 font-semibold rounded-3xl">
          View projects
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
