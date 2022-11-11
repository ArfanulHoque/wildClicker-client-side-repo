import React from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import AddReview from "../AddReview/AddReview";
import AllReviews from "../AllReviews/AllReviews";

const DetailsService = () => {
  const data = useLoaderData();
  console.log(data);
  const { _id, title, img, description, price } = data;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <p className="font-semibold">Price: ${price}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      <AddReview></AddReview>
      <AllReviews></AllReviews>
    </div>
  );
};

export default DetailsService;
