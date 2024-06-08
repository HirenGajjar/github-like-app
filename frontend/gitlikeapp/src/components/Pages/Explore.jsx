import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

function Explore() {
  return (
    <div>
      <div className="px-4">
        <div className=" bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 hover: bg-gray-600/10 border border-gray-800 text-white max-w-2xl mx-auto rounded-md p-4">
          <h1 className="text-xl font-bold text-center">
            Explore Popular Repositories
          </h1>
          <div className="flex flex-wrap gap-2 my-2 justify-center">
            <IoLogoJavascript
              className="h-11 sm:h-20 cursor-pointer"
              size={30}
            />
            <FaPython className="h-11 sm:h-20 cursor-pointer" size={30} />
            <TbBrandCpp className="h-11 sm:h-20 cursor-pointer" size={30} />
            <FaRust className="h-11 sm:h-20 cursor-pointer" size={30} />
            <FaGolang className="h-11 sm:h-20 cursor-pointer" size={30} />
            <FaJava className="h-11 sm:h-20 cursor-pointer" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
