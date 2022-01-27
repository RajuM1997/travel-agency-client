import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import ChooseUs from "../ChooseUs/ChooseUs";
import Testimonial from "../Testimonial/Testimonial";
import TourPackage from "../TourPackage/TourPackage";

const Home = () => {
  return (
    <div>
      <Banner />
      <TourPackage />
      <ChooseUs />
      <About />
      <Blog />
      <Testimonial />
    </div>
  );
};

export default Home;
