import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = ({ logo }) => {
  return (
    <div className="bg-[#191919] max-w-full max-h-[541px] flex flex-col text-white px-16 py-20">
      <div className="flex gap-32">
        <div className="flex flex-col gap-6 max-w-[500px] max-h-[206px]">
          <img src={logo} alt="logo" className="invert-100 max-w-48" />
          <span className="text-lg mx-2.5">
            Subscribe to our newsletter for the latest updates on features and
            new releases.
          </span>
          <div className="flex gap-4 mx-2.5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                console.log(email);
              }}
              className="flex gap-4 mx-2.5"
            >
              <input
                type="email"
                placeholder="Your email here..."
                name="email"
                aria-label="Email"
                className="bg-white/10 px-4 py-2 max-w-[406px] rounded-md outline-none"
                required
              />
              <button className="bg-white/10 hover:bg-white/20 py-4 px-7 cursor-pointer rounded-md">
                Join
              </button>
            </form>
          </div>
          <span className="text-xs mx-2.5">
            By subscribing, you consent to our Privacy Policy and agree to
            receive updates.
          </span>
        </div>

        <div className="flex gap-44">
          <div className="flex flex-col gap-4 text-white">
            <h3 className="text-2xl">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li>About Us</li>
              <li>Contact us</li>
              <li>Support Center</li>
              <li>Blog Post</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 text-white">
            <h3 className="text-2xl">Resources</h3>
            <ul className="flex flex-col gap-4">
              <li>Case Studies</li>
              <li>White Papers</li>
              <li>Webinars</li>
              <li>Events</li>
              <li>Newsroom</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 text-white" id="contact">
            <h3 className="text-2xl">Connect With Us</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#contact" className="flex gap-2 items-center">
                  <Facebook />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex gap-2 items-center">
                  <Instagram />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex gap-2 items-center">
                  <Twitter />
                  <span>X</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex gap-2 items-center">
                  <Linkedin />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex gap-2 items-center">
                  <Youtube />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-32 pt-10 border-t border-white/20">
        <span>© 2025 Relume. All rights reserved.</span>
        <div className="flex gap-8 underline text-white/75">
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Services</a>
          <a href="#contact">Cookie Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
