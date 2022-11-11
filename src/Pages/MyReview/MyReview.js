import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import MyReviewCart from "./MyReviewCart";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    fetch(`https://wild-clicker-server.vercel.app/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviewData(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete your review"
    );
    if (proceed) {
      fetch(`https://wild-clicker-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = reviewData.filter((odr) => odr._id !== id);
            setReviewData(remaining);
          }
        });
    }
  };

  return (
    <div>
      {reviewData.map((reviews) => (
        <MyReviewCart
          key={reviews._id}
          reviews={reviews}
          handleDelete={handleDelete}
        ></MyReviewCart>
      ))}
    </div>
  );
};

export default MyReview;
