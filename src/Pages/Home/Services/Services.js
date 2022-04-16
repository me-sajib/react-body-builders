import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container py-4">
      <h1 className="text-info text-center py-3">Our Services</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {services.map((services) => (
          <Service key={services.id} services={services} />
        ))}
      </div>
    </div>
  );
};

export default Services;
