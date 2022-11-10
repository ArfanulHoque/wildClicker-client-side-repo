import React, { useEffect, useState } from "react";

import ServiceCart from "../../Shared/ServiceCart/ServiceCart";

const CartData = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://wild-clicker-server.vercel.app/findServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCart key={service._id} service={service}></ServiceCart>
      ))}
    </div>
  );
};

export default CartData;
