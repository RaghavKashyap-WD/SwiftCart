import { Box, ChevronRight } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <div className="w-full h-[965px] bg-[#eeeef8] flex py-[112px] items-center flex-col">
      <div className="text-center w-[768px] h-[261px] flex flex-col gap-5 my-[80px]">
        <h3 className="text-lg font-semibold">Features</h3>
        <h1 className="text-5xl font-serif">
          Explore Our Exceptional Service Offerings
        </h1>
        <span>
          We pride ourselves on providing top-notch services that enhance your
          shopping experience. From free shipping to round-the-clock customer
          support, we have you covered.
        </span>
      </div>
      <div className="flex gap-10 mb-[80px]">
        <div className="w-[406px] h-[228px] flex flex-col gap-3 items-center">
          <Box size={35} />
          <h5 className="text-3xl font-serif text-center">
            Enjoy Free Shipping on All Orders
          </h5>
          <span>Get your products delivered without any shipping fees</span>
        </div>

        <div className="w-[406px] h-[228px] flex flex-col gap-3 items-center">
          <Box size={35} />
          <h5 className="text-3xl font-serif text-center">
            24/7 Customer Support for Your Convenience
          </h5>
          <span>Our dedicated team is here to assist you anytime.</span>
        </div>

        <div className="w-[406px] h-[228px] flex flex-col gap-3 items-center">
          <Box size={35} />
          <h5 className="text-3xl font-serif text-center">
            100% Money-Back Guarantee for Peace of Mind
          </h5>
          <span>Shop confidently with our hassle-free return policy.</span>
        </div>
      </div>

      <div className="flex gap-10 items-center justify-center">
        <button className="bg-gray-300 p-3 text-xl hover:bg-gray-400 transition-colors duration-300 ease-out rounded-sm cursor-pointer">
          Learn More
        </button>
        <button className="text-xl cursor-pointer">Sign Up</button>
        <ChevronRight size={25} />
      </div>
    </div>
  );
};

export default Features;
