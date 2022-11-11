import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCart = ({ service }) => {
  const services = useLoaderData();
  console.log(services);
  const { _id, img, title, price, description } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-8">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="Shoes" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title h-10">{title}</h2>
        <p>{description.slice(0, 100)}...</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
