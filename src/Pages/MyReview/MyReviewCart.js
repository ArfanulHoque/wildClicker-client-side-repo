import React from "react";

const MyReviewCart = ({ reviews, handleDelete }) => {
  const { _id, img, serviceName, price, message } = reviews;

  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <h2 className="font-bold">Price: ${price}</h2>
        <p>
          <span className="font-bold">Review:</span> {message}
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleDelete(_id)}
            className="badge badge-outline"
          >
            Delete
          </button>
          <button className="badge badge-outline">Update</button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCart;
