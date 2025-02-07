import React from "react";
import { FaGithub } from "react-icons/fa6";

export const DynamicPreview = () => {
  return (
    <div className="w-full sm:max-w-full md:max-w-screen-md lg:max-w-screen-lg backdrop-blur-sm bg-white/10 dark:bg-black/20 relative flex items-center justify-center rounded-xl aspect-[3/1] overflow-hidden border border-white/20 p-8 shadow-xl flex-col font-[montserrat] text-white">
      {/* Radial gradient overlay with softer transition */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_40%,rgba(1,30,160,10))]">
        {/* Dot pattern with reduced opacity */}
        <div className="absolute inset-0 bg-dot-black"></div>
        <div className="absolute inset-0 bg-grid-small-main-blue/40"></div>
      </div>

      <p className="lg:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 py-4">
        Web Developer
      </p>
      <p className="text-white/90 relative z-20 text-xs mb-5">
        I like to create things on the web
      </p>

      <div className="  flex items-center gap-2  backdrop-blur-md px-4 py-1 rounded-full bg-black/20">
        <FaGithub className="text-white h-5 w-5" />
        <a
          target="blank"
          href="https://github.com/petsamuel/beta-banners/"
          className="text-white text-xs font-medium"
        >
          Open Source
        </a>
      </div>
    </div>
  );
};
