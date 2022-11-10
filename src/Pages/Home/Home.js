import React from "react";
import About from "../About/About";
import ServiceCart from "../Shared/ServiceCart/ServiceCart";
import Banner from "./Banner";
import CartData from "./CartData/CartData";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CartData></CartData>
      <About></About>
    </div>
  );
};

export default Home;
