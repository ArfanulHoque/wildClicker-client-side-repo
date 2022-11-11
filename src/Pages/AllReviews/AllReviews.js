import React from "react";
import img4 from "../../assets/images/banner/banner-6.jpeg";

const AllReviews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <img className="h-20" src={img4} alt="" />
      <div className="flex flex-col-reverse font-bold m-6">
        <p>Name:</p>
        <p>Email:</p>
      </div>
      <p className="font-bold m-6">Review:</p>
    </div>
  );
};

export default AllReviews;
