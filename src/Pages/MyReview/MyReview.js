import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-4 m-10">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered w-full"
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default MyReview;
