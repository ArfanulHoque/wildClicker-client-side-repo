import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const AllServiceCart = ({ services }) => {
  const { _id, img, title, price, description } = services;
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-8">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title h-10">{title}</h2>
        <p>{description.slice(0, 100)}...</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          {/* <Link to={`/services/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default AllServiceCart;
