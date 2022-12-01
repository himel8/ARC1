import React from "react";
import Img1 from "../assets/arcives1.png";
import Img2 from "../assets/arcives2.jpg";
import Img3 from "../assets/arcives3.png";

const archives = [
  { img: Img1, text: "Joshua Mohamed" },
  { img: Img2, text: "TOG" },
  { img: Img3, text: "Equi-House" },
];

const Archives = () => {
  return (
    <section className="text-left pt-32 px-6 sm:px-10 md:px-16 custom:px-0">
      <h2 className="font-primary text-6xl mb-6">Archives</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
        {archives.map((archive, index) => (
          <div
            key={index}
            className={` hover:scale-105 transition-all transform ease-in-out duration-700 cursor-pointer ${
              index === 2 ? "border border-green-100 rounded-lg" : ""
            }`}
          >
            <div className="relative w-full h-full">
              {" "}
              <img src={archive.img} alt="" className="rounded-lg h-full " />
            </div>
            <p
              className={`absolute font-primary text-2xl  rotate-90 left-6 translate-x-[-50%] w-full ${
                index === 2 ? "top-[70%] lg:top-[33%]" : "top-[33%]"
              } ${index === 1 ? "top-[39%]  sm:top-[33%]" : ""}`}
            >
              {archive.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Archives;
