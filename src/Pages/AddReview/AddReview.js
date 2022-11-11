import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <p className="text-4xl font-bold text-center mt-6 text-green-500">
        Add Review
      </p>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-4 m-10 mb-1">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full "
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full"
          />
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered w-full"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-primary w-full mx-25 "
          placeholder="Review"
        ></textarea>
        <div className="text-center">
          <input
            className="btn btn-primary mb-8"
            type="submit"
            value="Add Your Review"
          />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
