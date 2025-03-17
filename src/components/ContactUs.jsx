import { MailIcon, MapPin, MessageSquareText, Phone } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#191919] px-16 py-28" id="contactus">
      <div className="flex gap-8 items-center">
        <div className="flex flex-col gap-6 text-white w-[304px] h-[226px]">
          <MailIcon size={40} />
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-serif">Email</h3>
            <span>
              We’re here to help with any questions or support you need.
            </span>
            <span>swiftcart@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-white w-[304px] h-[226px]">
          <MessageSquareText size={40} />
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-serif">Live chat</h3>
            <span>Connect with us instantly for real-time assistance.</span>
            <a href="#contactus">Start new chat</a>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-white w-[304px] h-[226px]">
          <Phone size={40} />
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-serif">Phone</h3>
            <span>Reach us anytime for quick support and inquiries.</span>
            <span>+1 (555) 000-0000</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-white w-[304px] h-[226px]">
          <MapPin size={40} />
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-serif">Office</h3>
            <span>Visit us at our headquarters for in-person assistance.</span>
            <span>123 Sample St, Sydney NSW 2000 AU</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
