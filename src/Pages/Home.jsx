import React from "react";
import { Route, Routes } from "react-router-dom";
import Archives from "../Components/Archives";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Sample from "../Components/Sample";

const Home = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/midnight" element={<Sample />} />
      <Route path="/" element={<Banner />} />
      <Route path="/archives" element={<Archives />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    // </BrowserRouter>
  );
};

export default Home;
