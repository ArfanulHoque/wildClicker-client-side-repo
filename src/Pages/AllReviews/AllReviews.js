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
      {reviewMyData.map((review) => (
        <ReviewCart key={_id} review={review}></ReviewCart>
      ))}
    </div>
  );
};

export default AllReviews;
