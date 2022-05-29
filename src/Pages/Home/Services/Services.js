import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://quiet-woodland-96649.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
    setLoading(false);
  }, []);
  return (
    <div className="container py-4">
      <h1 className="text-info text-center py-3">Our Services</h1>
      {
        // if loading is true then show the loader
        loading && <Loading />
      }
      <div className="row row-cols-1 row-cols-md-2 g-4 ">
        {services.map((services) => (
          <Service key={services._id} services={services} />
        ))}
      </div>
    </div>
  );
};

export default Services;
