import { X } from "lucide-react";
import React from "react";

const FAQs = () => {
  return (
    <div id="faqs" className="bg-[#444458] py-28 px-16">
      <div className="flex flex-col gap-20 justify-center items-center">
        <div className="flex flex-col gap-6 text-center text-white">
          <h1 className="text-4xl font-serif">FAQs</h1>
          <span className="text-xl">
            Find answers to your questions quickly and easily in our FAQ
            section.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-8 justify-center items-center mt-20">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-6 text-white rounded-3xl max-w-[768px] max-h-[144px] bg-[#333342] px-6 py-5">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h5 className="font-sans font-semibold text-xl">
                  What payment methods accepted?
                </h5>
                {/* <X size={20} className="cursor-pointer" /> */}
              </div>
              <span className="text-lg">
                We accept all major credit cards, PayPal, and other secure
                payment options. Your transactions are safe with us. Please
                check our payment page for more details.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-6 text-white rounded-3xl max-w-[768px] max-h-[144px] bg-[#333342] px-6 py-5">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h5 className="font-sans font-semibold text-xl">
                  How to track order?
                </h5>
                {/* <X size={20} className="cursor-pointer" /> */}
              </div>
              <span className="text-lg">
                You can track your order using the tracking link sent to your
                email. Simply click on the link for real-time updates. If you
                have any issues, feel free to contact us.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-6 text-white rounded-3xl max-w-[768px] max-h-[144px] bg-[#333342] px-6 py-5">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h5 className="font-sans font-semibold text-xl">
                  What is your return policy?
                </h5>
                {/* <X size={20} className="cursor-pointer" /> */}
              </div>
              <span className="text-lg">
                We offer a 30-day return policy on most items. Please ensure
                items are in original condition. For more details, visit our
                returns page.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-6 text-white rounded-3xl max-w-[768px] max-h-[144px] bg-[#333342] px-6 py-5">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h5 className="font-sans font-semibold text-xl">
                  Do you ship internationally?
                </h5>
                {/* <X size={20} className="cursor-pointer" /> */}
              </div>
              <span className="text-lg">
                Yes, we ship to various countries worldwide. Shipping fees and
                delivery times may vary. Check our shipping information page for
                specifics.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-6 text-white rounded-3xl max-w-[768px] max-h-[144px] bg-[#333342] px-6 py-5">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h5 className="font-sans font-semibold text-xl">
                  How to contact support?
                </h5>
                {/* <X size={20} className="cursor-pointer" /> */}
              </div>
              <span className="text-lg">
                You can reach our support team via the contact form on our
                website. We aim to respond within 24 hours. Your satisfaction is
                our priority.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center mt-20 text-white">
        <h3 className="text-4xl font-serif">Still have questions?</h3>
        <span className="text-xl">
          We're here to help you with any inquiries.
        </span>
        <div className="bg-white/10 rounded-md hover:bg-white/20 transition-colors duration-300 ease-out">
          <a href="#contactus">
            <span className="text-lg flex items-center justify-center max-w-[112px] max-h-[44px] cursor-pointer">
              Contact
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
