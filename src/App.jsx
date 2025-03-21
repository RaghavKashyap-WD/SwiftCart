import React, { useState } from "react";
import logo from "../public/Logo.png";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Features from "./components/Features";
import Discover from "./components/Discover";
import discoverImg from "../public/WomenClothes/discover.jpg";
import Explore from "./components/Explore";
import exploreImg from "../public/WomenClothes/exploreImg.jpg";
import Testimonials from "./components/Testimonials";
import Shop from "./components/Shop";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import MoreLinks from "./components/MoreLinks";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const clothesDisplayImg = [
    // { id: 1, url: "../public/ClothesShowcase/img1.jpg" },
    { id: 2, url: "../ClothesShowcase/img2.jpg" },
    { id: 3, url: "../ClothesShowcase/img3.jpg" },
    { id: 4, url: "../ClothesShowcase/img4.jpg" },
    { id: 5, url: "../ClothesShowcase/img5.jpg" },
    { id: 6, url: "../ClothesShowcase/img6.jpg" },
    { id: 7, url: "../ClothesShowcase/img7.jpg" },
    { id: 8, url: "../ClothesShowcase/img8.jpg" },
    { id: 9, url: "../ClothesShowcase/img9.jpg" },
  ];

  return (
    <div>
      <Analytics />
      <NavBar logo={logo} setIsVisible={setIsVisible} isVisible={isVisible} />
      <MoreLinks isVisible={isVisible} />
      <Home clotheDisplayImg={clothesDisplayImg} />
      <Features />
      <Discover discoverImg={discoverImg} />
      <Explore exploreImg={exploreImg} />
      <Testimonials />
      <Shop />
      <ContactUs />
      <FAQs />
      <Footer logo={logo} />
    </div>
  );
}

export default App;
