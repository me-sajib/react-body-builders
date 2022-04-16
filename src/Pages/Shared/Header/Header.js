import React from "react";
import Services from "../../Home/Services/Services";
import Slider from "../../Home/Slider/Slider";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <div>
      <Nav />
      <Slider />
      <Services />
    </div>
  );
};

export default Header;
