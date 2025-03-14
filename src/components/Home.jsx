import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const Home = ({ clotheDisplayImg }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === clotheDisplayImg.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  });

  return (
    <div className="bg-[#E0B5DD] w-full p-10 flex justify-center items-center">
      <div className="flex flex-col gap-3 w-[616px] h-[315px] justify-between mx-20">
        <h1 className="font-extrabold font-[serif] text-6xl">
          Discover Your Perfect Style Today
        </h1>
        <p className="text-lg">
          Explore our curated collection of high quality products designed to
          elevate your lifestyle. Shop with confidence and enjoy a seamless
          online experience tailored just for you.
        </p>
        <div className="flex gap-[16px]">
          <button className="p-3 bg-black hover:bg-zinc-800 text-white w-[89px]">
            Shop
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 w-[139px]">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center h-full w-[616px]">
        <img
          src={clotheDisplayImg[index].url}
          alt=""
          className="w-fit h-[80vh] object-cover rounded-xl shadow-2xl mx-28 hover:scale-105 transition-transform duration-500 ease-out cursor-pointer animate-fade-up animate-once animate-ease-in -translate-y-3"
        />
        <div className="flex gap-3">
          <button
            onClick={() =>
              setIndex((prevIndex) =>
                index === 0 ? clotheDisplayImg.length - 1 : prevIndex - 1
              )
            }
          >
            <ArrowLeft />
          </button>
          <div className="flex gap-1 justify-between items-center">
            <span
              className={`w-[10px] h-[10px] ${
                index === 0 ? "bg-gray-800 scale-140" : "bg-gray-600"
              } rounded-full`}
            ></span>
            <span
              className={`w-[10px] h-[10px] ${
                index === 1 ? "bg-gray-800 scale-140" : "bg-gray-600"
              } rounded-full`}
            ></span>
            <span
              className={`w-[10px] h-[10px] ${
                index === 2 ? "bg-gray-800 scale-140" : "bg-gray-600"
              } rounded-full`}
            ></span>
            <span
              className={`w-[10px] h-[10px] ${
                index === 3 ? "bg-gray-800 scale-140" : "bg-gray-600"
              } rounded-full`}
            ></span>
            <span
              className={`w-[10px] h-[10px] ${
                index === 4 ? "bg-gray-800 scale-140" : "bg-gray-600"
              } rounded-full`}
            ></span>
            <span
              className={`w-[10px] h-[10px] ${
                index === 5 ? "bg-gray-800 scale-140" : "bg-gray-600"
              } rounded-full`}
            ></span>
            <span
              className={`w-[10px] h-[10px] ${
                index === 6 ? "bg-gray-800 scale-110" : "bg-gray-600"
              } rounded-full`}
            ></span>
            <span
              className={`w-[10px] h-[10px] ${
                index === 7 ? "bg-gray-800 scale-110" : "bg-gray-600"
              } rounded-full`}
            ></span>
          </div>
          <button
            onClick={() =>
              setIndex((prevIndex) => (prevIndex + 1) % clotheDisplayImg.length)
            }
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
