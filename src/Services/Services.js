import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./service.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div>
      <div>
        <h1 className=" sm:text-4xl lg:text-4xl text-yellow-700 py-2">
          Our Services
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
