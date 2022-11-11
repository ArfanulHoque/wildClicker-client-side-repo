import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const AddReview = ({ data }) => {
  const { _id, img, title, description, price } = data;
  const { user } = useContext(AuthContext);
  const handlereview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const customerImage = user?.photoURL;
    const phone = form.phone.value;
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      customerImage,
      email,
      phone,
      message,
      img,
    };

    // }

    fetch("https://wild-clicker-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div>
      <p className="text-4xl font-bold text-center mt-6 text-green-500">
        Add Review
      </p>
      <form onSubmit={handlereview}>
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
