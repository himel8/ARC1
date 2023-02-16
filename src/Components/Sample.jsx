import React from "react";
import Img3 from "../assets/item3.png";
import Shocks from "./Shocks";

const Sample = () => {
  return (
    <section className="text-left pt-16 px-6 sm:px-10 md:px-16 custom:px-0 min-h-screen">
      <h2 className="font-primary text-4xl mb-6">
        <span className="text-[3.2rem]">M</span>idnight
      </h2>
      <Shocks
        src={Img3}
        Style="absolute top-20 custom:left-[50%] left-[50%] "
      />
      <Shocks src={Img3} Style="absolute top-20 custom:left-[80%] left-[90%]" />
      {/* 2nd */}
      <Shocks
        src={Img3}
        Style="absolute top-[50%] custom:left-[35%] left-[20%]"
      />
      <Shocks src={Img3} Style="absolute top-[50%] left-[65%]" />
      {/* 3rd */}
      <Shocks
        src={Img3}
        Style="absolute top-[90%] custom:left-[20%] left-[15%] hidden custom:block"
      />
      <Shocks
        src={Img3}
        Style="absolute top-[90%] custom:left-[50%] left-[40%]"
      />

      <Shocks
        src={Img3}
        Style="absolute top-[90%] custom:left-[80%] left-[90%]"
      />
    </section>
  );
};

export default Sample;
