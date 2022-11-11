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
        Nature, especially wilderness, has a calming effect on the mind
      </p>
      <Banner></Banner>
      <CartData></CartData>
      <div className="text-center  ">
        <Link className="btn btn-primary content-center " to="/services">
          <button className="p-8">All Services</button>
        </Link>
      </div>
      <p className="text-4xl font-bold border-dashed border-2 border-green-500 text-center m-4 p-2">
        Who I am ?
      </p>
      <About></About>
    </div>
  );
};

export default Home;
