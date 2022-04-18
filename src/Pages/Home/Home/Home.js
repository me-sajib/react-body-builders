import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Offer from "../Offer/Offer";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="service-bg">
        <Services />
      </div>
      <Offer />
      <Footer />
    </div>
  );
};

export default Home;
