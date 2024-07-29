import SiteHeader from "@/components/site/siteheader";
import React from "react";
import LandingComponent from "@/components/site/landingcomponent";

const LandingHome = () => {
  return (
    <main className="relative bg-[#100720] text-white min-h-screen overflow-hidden">
      <SiteHeader />
      {/* Container for hero background image */}
      <div className="absolute -inset-11 z-[1]">
        <img
          src="./bgs/hero-bg.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      <LandingComponent />
    </main>
  );
};

export default LandingHome;
