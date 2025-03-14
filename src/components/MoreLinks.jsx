import React from "react";
import { Box } from "lucide-react";

const MoreLinks = ({ isvisible, setIsVisible }) => {
  return (
    <div className="bg-[#E0B5DD] w-full p-10 flex">
      <ul className="flex flex-col gap-9 mx-12 my-10 cursor-pointer">
        <li className="flex items-center gap-2">
          <Box size={24} />
          <div className="flex gap-3 flex-col mx-1.5">
            <h3>About Us</h3>
            <span>Learn about our mission and values.</span>
          </div>
        </li>

        <li className="flex items-center gap-2">
          <Box size={24} />
          <span>
            <h3>Our services</h3>
            <span>Explore the services we offer to you.</span>
          </span>
        </li>

        <li className="flex items-center gap-2">
          <Box size={24} />
          <h3>Customer Support</h3>
          <span>Get help with your inquieries and issues.</span>
        </li>

        <li className="flex items-center gap-2">
          <Box size={24} />
          <h3>FAQs</h3>
          <span>Find answers to common questions here.</span>
        </li>
      </ul>

      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default MoreLinks;
