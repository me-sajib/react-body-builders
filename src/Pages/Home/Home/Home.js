import React from "react";
import Offer from "../Offer/Offer";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
      <Offer />
    </div>
  );
};

export default Home;
