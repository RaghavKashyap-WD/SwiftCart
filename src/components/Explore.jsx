import React from "react";

const Explore = ({ exploreImg }) => {
  return (
    <div className="bg-[#f2f2f2] py-28 px-16">
      <div
        id="shopnow"
        className="flex items-center justify-center gap-20 max-w-[1312px] max-h-[640px] "
      >
        <div className="flex flex-col gap-10 max-w-[616px] max-h-[499px] translate-y-10">
          <div>
            <h3 className="text-xl font-sans font-semibold ">Discover</h3>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-serif">
              Explore Our Latest and Featured Products
            </h1>
            <p className="text-lg font-sans">
              Browse our selection of top-quality products designed to meet your
              needs. Each item is carefully curated to ensure the best shopping
              experience.
            </p>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl font-serif">Sale</h3>
              <span className="text-lg font-sans">
                Unbeatable prices on our best-selling items!
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-4xl font-serif">New</h3>
              <span className="text-lg font-sans">
                Check out the latest arrivals in our store.
              </span>
            </div>
          </div>

          <div className="max-w-[184px] max-h-[44px] flex gap-2">
            <button className="bg-gray-300 hover:bg-gray-400 transition-colors duration-300 ease-out max-w-[89px] max-h-[44px] cursor-pointer text-xl rounded-sm">
              Shop
            </button>
            <button className="max-w-[89px] max-h-[44px] cursor-pointer ">
              View {">"}
            </button>
          </div>
        </div>

        <div>
          <img
            src={exploreImg}
            alt="img"
            className="max-w-[540px] max-h-[640px] rounded-4xl hover:scale-105 transition-transform duration-500 ease-out cursor-pointer translate-y-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
