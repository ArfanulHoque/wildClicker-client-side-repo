import React from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import ServiceCart from "../Shared/ServiceCart/ServiceCart";
import Banner from "./Banner";
import CartData from "./CartData/CartData";

const Home = () => {
  return (
    <div>
      <p className="text-3xl font-bold text-green-500 text-center mb-4">
        Adopt the pace of nature: her secret is patience.
      </p>
      <Banner></Banner>
      <CartData></CartData>
      <Link className="btn btn-primary " to="/services">
        <button>All Services</button>
      </Link>
      <About></About>
    </div>
  );
};

export default Home;
