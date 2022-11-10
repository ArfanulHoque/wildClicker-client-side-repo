import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
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
        <input
          className="btn btn-primary mb-8"
          type="submit"
          value="Add Your Review"
        />
      </form>
    </div>
  );
};

export default MyReview;
