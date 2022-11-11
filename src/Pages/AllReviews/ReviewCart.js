import React from "react";

const ReviewCart = ({ review }) => {
  const { message, customerImage, email, customer } = review;
  return (
    <div>
      <p className="text-3xl text-center font-bold text-green-500">
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
          <tbody>
            <tr>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={customerImage}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{customer}</div>
                  </div>
                </div>
              </td>
              <td>
                {email}
                <br />
              </td>
              <td>{message}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewCart;