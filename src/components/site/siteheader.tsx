import React from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { Button } from "../ui/button";
const SiteHeader = () => {
  return (
    <div
      className="flex  
    z-[2]

    justify-between px-10 h-[10vh] items-center"
    >
      <div className="flex gap-2 items-center">
        <Image src={logo} alt="Logo" className="object-contain h-10 w-10" />
        <span className="text-3xl font-semibold tracking-wide">Clientbase</span>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="#" className="text-lg">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="text-lg">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-lg">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Button className="text-white font-semibold px-4 py-2 rounded-md shadow-md">
        Get Started
      </Button>
    </div>
  );
};

export default SiteHeader;
