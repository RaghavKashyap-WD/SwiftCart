import React from "react";

const Shop = () => {
  return (
    <div className="bg-[#f2f2f2] py-28 px-16 ">
      <div className="flex gap-20 w-[1312px] h-[157px]">
        <h1 className="text-5xl font-serif">
          Discover Our Exclusive Collections
        </h1>
        <div className="w-[616px] h-[157px] flex flex-col gap-8">
          <p className="text-lg">
            Explore a wide range of premium products tailored just for you. Sign
            up for our newsletter to stay updated on the latest arrivals and
            exclusive offers!
          </p>

          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-rose-300 to-orange-300 w-[89px] h-[44px] hover:from-rose-400 hover:to-orange-400 transition-colors duration-300 ease-out text-white rounded-md cursor-pointer text-lg">
              Shop
            </button>
            <button className="bg-gray-300 w-[125px] h-[44px] rounded-md hover:bg-gray-400 cursor-pointer transition-colors duration-300 ease-out text-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
