import React from "react";
import { Box } from "lucide-react";

const MoreLinks = ({ isVisible }) => {
  return (
    <div
      className={`bg-[#E0B5DD] max-w-full p-10 flex ${
        isVisible ? "" : "hidden"
      }`}
    >
      <div className="flex gap-20">
        <div>
          <h1 className="text-4xl font-serif mx-12 mt-7">Quick Links</h1>
          <ul className="flex flex-col gap-9 mx-12 my-10 cursor-pointer">
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <Box size={24} />
                <div className="flex gap-1 flex-col mx-1.5">
                  <h3 className="text-xl font-sans">About Us</h3>
                  <span className="text-lg">
                    Learn about our mission and values.
                  </span>
                </div>
              </a>
            </li>

            <li className="flex items-center gap-2">
              <a href="#features" className="flex items-center gap-2">
                <Box size={24} />
                <div className="flex gap-1 flex-col mx-1.5">
                  <h3 className="text-xl font-sans">Our services</h3>
                  <span className="text-lg">
                    Explore the services we offer to you.
                  </span>
                </div>
              </a>
            </li>

            <li className="flex items-center gap-2">
              <a href="#contactus" className="flex items-center gap-2">
                <Box size={24} />
                <div className="flex gap-1 flex-col mx-1.5">
                  <h3 className="text-xl font-sans">Customer Support</h3>
                  <span className="text-lg">
                    Get help with your inquieries and issues.
                  </span>
                </div>
              </a>
            </li>

            <li className="flex items-center gap-2">
              <a href="#faqs" className="flex items-center gap-2">
                <Box size={24} />
                <div className="flex gap-1 flex-col mx-1.5">
                  <h3 className="text-xl font-sans">FAQs</h3>
                  <span className="text-lg">
                    Find answers to common questions here.
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-4xl font-serif mx-12 mt-7">
            Additional Resources
          </h1>
          <ul className="flex flex-col gap-9 mx-12 my-10 cursor-pointer">
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <Box size={24} />
                <div className="flex gap-1 flex-col mx-1.5">
                  <h3 className="text-xl font-sans">Blog Posts</h3>
                  <span className="text-lg">
                    Read our latest articles and insights.
                  </span>
                </div>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <Box size={24} />
                <div className="flex gap-1 flex-col mx-1.5">
                  <h3 className="text-xl font-sans">Case Studies</h3>
                  <span className="text-lg">
                    See how we’ve helped our clients succeed.
                  </span>
                </div>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#testimonials" className="flex items-center gap-2">
                <Box size={24} />
                <div className="flex gap-1 flex-col mx-1.5">
                  <h3 className="text-xl font-sans">Testimonials</h3>
                  <span className="text-lg">
                    Hear from our satisfied customers.
                  </span>
                </div>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <Box size={24} />
                <div className="flex gap-1 flex-col mx-1.5">
                  <h3 className="text-xl font-sans">News Updates</h3>
                  <span className="text-lg">
                    Stay informed about our latest news.
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-4xl font-serif mx-12 mt-7">Blog Highlights</h1>
          <ul className="flex flex-col gap-9 mx-12 my-10 cursor-pointer">
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <Box size={24} />
                <div className="flex gap-1 flex-col mx-1.5">
                  <h3 className="text-xl font-sans">Latest Articles</h3>
                  <span className="text-lg">
                    Discover our most recent blog entries.
                  </span>
                </div>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <Box size={24} />
                <div className="flex gap-1 flex-col mx-1.5">
                  <h3 className="text-xl font-sans">Popular Topics</h3>
                  <span className="text-lg">
                    Explore trending subjects in our blog.
                  </span>
                </div>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <Box size={24} />
                <div className="flex gap-1 flex-col mx-1.5">
                  <h3 className="text-xl font-sans">Expert Insights</h3>
                  <span className="text-lg">
                    Gain knowledge from industry experts.
                  </span>
                </div>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <Box size={24} />
                <div className="flex gap-1 flex-col mx-1.5">
                  <h3 className="text-xl font-sans">Subscribe Now</h3>
                  <span className="text-lg">
                    Join our newsletter for updates.
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoreLinks;
