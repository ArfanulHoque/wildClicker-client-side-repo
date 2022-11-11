import React from "react";

const AddService = () => {
  return (
    <form className="card-body">
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
          name="photo url"
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
