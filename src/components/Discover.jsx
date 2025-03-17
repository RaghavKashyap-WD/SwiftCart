import React from "react";

const Discover = ({ discoverImg }) => {
  return (
    <div className="py-28 px-16 bg-[#f2f2f2] ">
      <div className="flex items-center justify-center gap-[80px] w-[1312px] h-[640px]">
        <div className="flex flex-col w-[616px] h-[201px] gap-7">
          <h3 className="text-4xl font-serif">
            Discover the unmatched benefits of shopping with us today!
          </h3>
          <span className="text-xl">
            We prioritize quality assurance to ensure you receive only the best
            products. Your satisfaction is our commitment, making every shopping
            experience enjoyable and reliable.
          </span>
        </div>
        <img
          src={discoverImg}
          alt="img"
          className="w-[616px] h-[640px] rounded-4xl hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Discover;
