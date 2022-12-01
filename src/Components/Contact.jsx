import React from "react";
import Img1 from "../assets/item1.png";
import Img2 from "../assets/item2.png";
import Img3 from "../assets/item3.png";
import Img4 from "../assets/item4.png";

const images = [
  { img: Img3, bg: "bg-[#131419]" },
  { img: Img1, bg: "bg-[#5e493c]" },
  { img: Img4, bg: "bg-[#f2e0b2]" },
  { img: Img2, bg: "bg-[#f6f7f9]" },
];
const Contact = () => {
  return (
    <section className="text-left pt-32 px-6 sm:px-10 md:px-16 custom:px-0">
      <h2 className="font-primary text-6xl ">ARC1</h2>
      <p className="text-[1.5rem] font-text uppercase ">"from the ground up"</p>

      <div className="gap-3  py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.bg} rounded-lg hover:scale-105 transition-all transform ease-in-out duration-700 cursor-pointer`}
          >
            <img src={image.img} alt="" className="w-full" />
          </div>
        ))}
      </div>
      <p className="font-text text-base leading-[20px]">
        A sock is neither thought about or seen, however, it aids us in the
        comfort of moving around in our daily lives. The "from the ground up"
        collection by arcofta represents the start of the journey, the
        preliminary layering that prepares you for the road aheads, an easy
        journey was never promised.
      </p>
    </section>
  );
};

export default Contact;
