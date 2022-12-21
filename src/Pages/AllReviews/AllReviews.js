import React, { useEffect, useState } from "react";
import img4 from "../../assets/images/banner/banner-6.jpeg";
import ReviewCart from "./ReviewCart";

const AllReviews = ({ data }) => {
  const [reviewMyData, setReviewMyData] = useState([]);
  const { _id } = data;
  useEffect(() => {
    fetch(`https://wild-clicker-server.vercel.app/reviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviewMyData(data);
      });
  }, [_id]);
  return (
    <div>
      <p className="text-3xl text-center font-bold text-green-500 mb-4">
        All Reviews
      </p>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Review</th>
            </tr>
          </thead>
        </table>
      </div>
      {reviewMyData.map((review) => (
        <ReviewCart key={_id} review={review}></ReviewCart>
      ))}
    </div>
  );
};

export default AllReviews;
