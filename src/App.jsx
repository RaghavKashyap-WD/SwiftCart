import React from "react";
import logo from "../public/Logo.png";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Features from "./components/Features";

function App() {
  const clothesDisplayImg = [
    // { id: 1, url: "../public/ClothesShowcase/img1.jpg" },
    { id: 2, url: "../public/ClothesShowcase/img2.jpg" },
    { id: 3, url: "../public/ClothesShowcase/img3.jpg" },
    { id: 4, url: "../public/ClothesShowcase/img4.jpg" },
    { id: 5, url: "../public/ClothesShowcase/img5.jpg" },
    { id: 6, url: "../public/ClothesShowcase/img6.jpg" },
    { id: 7, url: "../public/ClothesShowcase/img7.jpg" },
    { id: 8, url: "../public/ClothesShowcase/img8.jpg" },
    { id: 9, url: "../public/ClothesShowcase/img9.jpg" },
  ];

  return (
    <div>
      <NavBar logo={logo} />
      <Home clotheDisplayImg={clothesDisplayImg} />
      <Features />
    </div>
  );
}

export default App;
