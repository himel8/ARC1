import React from "react";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="h-screen banner w-full">
      <img src={banner} alt="banner" className="w-full h-full object-cover" />
    </section>
  );
};

export default Banner;
