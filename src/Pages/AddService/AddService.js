import React from "react";

const AddService = () => {
  const addservicehandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const price = form.price.value;
    const img = form.photourl.value;
    const description = form.description.value;

    const service = {
      title,
      price,
      img,
      description,
    };

    fetch("https://wild-clicker-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={addservicehandle} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Title Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="text"
          name="price"
          placeholder="price"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input
          type="text"
          name="photourl"
          placeholder="Photo URL"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="input input-bordered"
        />
      </div>
      <div className="form-control mt-6">
        <input
          className="btn btn-primary"
          type="submit"
          value="Add You Services"
        />
      </div>
    </form>
  );
};

export default AddService;
