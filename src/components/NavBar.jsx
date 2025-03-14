import React, { useState } from "react";
import MoreLinks from "./MoreLinks";

const NavBar = ({ logo }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-[#E0B5DD] w-full h-[72px] flex flex-col p-4">
      <div className="bg-[#E0B5DD] w-full h-[72px] flex items-center justify-between">
        <div className="flex gap-3">
          <a href="#">
            <img src={logo} alt="Logo" className="w-[220px] h-full mx-10" />{" "}
          </a>
          <ul className="flex justify-center items-center gap-9">
            {["Home Page", "Shop Now", "Contact Us"].map((nav, id) => (
              <li key={id}>
                <a href={"#" + nav.toLowerCase().replace(" ", "")}>{nav}</a>
              </li>
            ))}
          </ul>
          {/* <button
            onClick={() => {
              setIsVisible((prev) => !prev);
            }}
            className="mx-6"
          >
            More Links
          </button> */}
        </div>
        <div className="mx-20 flex gap-5">
          <button className="w-[63px] h-[40px] bg-gray-100 text-center hover:bg-gray-200">
            Go
          </button>
          <button className="w-[70px] h-[40px] bg-black hover:bg-zinc-800 text-white">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
