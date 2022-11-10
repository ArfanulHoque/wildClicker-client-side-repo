import React, { useEffect, useState } from "react";
import AllServiceCart from "../AllServiceCart/AllServiceCart";

const AllCartData = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("https://wild-clicker-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {allServices.map((services) => (
        <AllServiceCart key={services._id} services={services}></AllServiceCart>
      ))}
    </div>
  );
};

export default AllCartData;
