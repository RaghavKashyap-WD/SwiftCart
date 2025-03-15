import { Star, UserRound } from "lucide-react";
import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full h-[470px] py-28 px-16 bg-[#d8d8d8] flex justify-center items-center">
      <div className="w-[768px] h-[246px] flex flex-col gap-8">
        <div className="flex justify-center items-center gap-3">
          <Star strokeWidth={3} absoluteStrokeWidth />
          <Star strokeWidth={3} absoluteStrokeWidth />
          <Star strokeWidth={3} absoluteStrokeWidth />
          <Star strokeWidth={3} absoluteStrokeWidth />
          <Star strokeWidth={3} absoluteStrokeWidth />
        </div>

        <div>
          <p className="text-2xl font-serif font-light text-center">
            "This eCommerce platform transformed our online sales! The user
            experience is outstanding, making it easy for our customers to shop
            and checkout seamlessly."
          </p>
        </div>

        <div className="flex gap-10 items-center justify-center">
          <UserRound size={60} strokeWidth={3} absoluteStrokeWidth />
          <div>
            <h4 className="text-xl font-sans font-semibold">Jane Doe</h4>
            <span className="text-2xl">CEO, ShopSmart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
