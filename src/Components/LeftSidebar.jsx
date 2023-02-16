import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const LeftSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`w-[10%] custom:w-[20%] z-50`}>
      <div className="h-full relative custom:block hidden">
        <div className="flex flex-col gap-32 fixed left-[10%] w-[20%] top-[40%] translate-x-[-50%] translate-y-[-50%] h-full items-center justify-center">
          <div className="w-full flex justify-center">
            <Link to="/">
              <img src={logo} alt="logo" className="w-[60%] mx-auto" />
            </Link>
          </div>
          <div className="flex justify-center flex-col font-primary text-4xl font-bold gap-5 bg-white pb-10">
            <Link to="/">ARC1</Link>
            <Link to="/archives">Archives</Link>
            <Link to="/contact">contact us</Link>
          </div>
        </div>
      </div>

      {/* mobile sidebar */}
      <div className="custom:hidden fixed z-10 ">
        {open === false ? (
          <BiMenuAltLeft
            onClick={() => setOpen(true)}
            className="text-5xl text-black pl-1 pt-1"
          />
        ) : (
          <div
            className={`h-screen fixed z-10 ${
              open === true
                ? "slide-in w-[80%] sm:w-[50%] bg-slate-200 left-[120px]"
                : "left-[-120px] w-[0%] slide-out"
            }   top-[49.5%] translate-x-[-50%] translate-y-[-50%]`}
          >
            <div className="w-full flex justify-end pt-2 pr-2">
              <MdClose
                onClick={() => setOpen(false)}
                className="text-4xl z-10 cursor-pointer "
              />
            </div>
            <div className="flex flex-col gap-24 sm:gap-4 ">
              <div className="w-full flex justify-center">
                <Link to="/">
                  <img src={logo} alt="logo" className="w-[60%] mx-auto" />
                </Link>
              </div>
              <div className="flex justify-center flex-col font-primary text-4xl font-bold gap-5">
                <Link to="/">ARC1</Link>
                <Link to="/archives">Archives</Link>
                <Link to="/contact">contact us</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;
