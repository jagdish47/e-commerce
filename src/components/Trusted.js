import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { SiCircle } from "react-icons/si";
import { BiCube } from "react-icons/bi";
import { GiBrokenHeartZone } from "react-icons/gi";
import { AiOutlineBarChart } from "react-icons/ai";

const Trusted = () => {
  return (
    <>
      <div className="w-full h-80 bg-[#F1F5F9] flex flex-col justify-center items-center">
        <h1 className="text-2xl">Trusted By 1000+ Companies</h1>
        <div className="flex w-3/5 justify-around mt-12">
          <IoLogoJavascript className="h-16 w-16" />
          <SiCircle className="h-16 w-16" />
          <BiCube className="h-16 w-16" />
          <GiBrokenHeartZone className="h-16 w-16" />
          <AiOutlineBarChart className="h-16 w-16" />
        </div>
      </div>
    </>
  );
};

export default Trusted;
