import React from "react";

const Shocks = ({ src, Style }) => {
  return (
    <div className={`${Style} translate-x-[-50%] translate-y-[-50%] z-30`}>
      <div className="custom:w-[600px] custom:h-[600px] w-[450px] h-[450px]">
        <img
          src={src}
          alt="shock-img"
          className="w-full h-full hover:scale-110 transition-all transform ease-in-out duration-700 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Shocks;
