import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const NavBar = ({ logo, setIsVisible, isVisible }) => {
  return (
    <div className="bg-[#E0B5DD] max-w-full max-h-[72px] flex flex-col p-4">
      <div className="bg-[#E0B5DD] max-w-full max-h-[72px] flex items-center justify-between">
        <div className="flex gap-3">
          <a href="#">
            <img
              src={logo}
              alt="Logo"
              className="max-w-[220px] max-h-full mx-10"
            />
          </a>
          <ul className="flex justify-center items-center gap-9">
            {["Home Page", "Shop Now", "Contact Us"].map((nav, id) => (
              <li
                key={id}
                className="cursor-pointer border-b-2 border-transparent hover:border-black transition-colors duration-300 ease-out text-lg font-serif"
              >
                <a href={"#" + nav.toLowerCase().replace(" ", "")}>{nav}</a>
              </li>
            ))}

            <button
              onClick={() => {
                setIsVisible((prev) => !prev);
              }}
              className={`cursor-pointer border-b-2 border-transparent hover:border-black transition-colors duration-300 ease-out max-h-6 text-lg font-serif flex justify-center items-center p-4`}
            >
              <div className="flex gap-2">
                <span>More Links </span>
                {isVisible ? (
                  <ChevronRight strokeWidth={1} />
                ) : (
                  <ChevronDown strokeWidth={1} />
                )}
              </div>
            </button>
          </ul>
        </div>
        <div className="mx-20 flex gap-5">
          <button className="w-[63px] h-[40px] bg-gray-100 text-center hover:bg-gray-200 transition-colors duration-300 cursor-pointer ease-out">
            Go
          </button>
          <button className="w-[70px] h-[40px] bg-black hover:bg-zinc-800 transition-colors duration-300 ease-out cursor-pointer text-white">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
