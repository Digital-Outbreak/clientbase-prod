import React from "react";
import SiteHeader from "@/components/site/siteheader";
import LandingComponent from "@/components/site/landingcomponent";
import SiteBlock from "@/components/site/siteblock";

const LandingHome = () => {
  return (
    <main className="relative text-white min-h-screen overflow-hidden">
      <SiteHeader />

      <div className="absolute inset-0 -z-10">
        <img
          src="./bgs/hero-bg.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      <LandingComponent />
      <SiteBlock />
    </main>
  );
};

export default LandingHome;
