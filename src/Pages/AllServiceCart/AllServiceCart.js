import React from "react";

const AllServiceCart = ({ services }) => {
  const { img, title, price, description } = services;
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-8">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title h-10">{title}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default AllServiceCart;
