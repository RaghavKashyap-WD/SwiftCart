import React from "react";

const FAQs = () => {
  return (
    <div className="bg-[#444458] py-28 px-16">
      <div className="flex flex-col gap-20 justify-center items-center">
        <div className="flex flex-col gap-6 text-center text-white">
          <h1 className="text-4xl font-serif">FAQs</h1>
          <span className="text-xl">
            Find answers to your questions quickly and easily in our FAQ
            section.
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <h5>What payment methods accepted?</h5>
            <span>
              We accept all major credit cards, PayPal, and other secure payment
              options. Your transactions are safe with us. Please check our
              payment page for more details.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
