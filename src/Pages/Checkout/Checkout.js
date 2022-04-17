import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../Shared/Loading/Loading";

const Checkout = () => {
  const [services, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enroll, setEnroll] = useState(false);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/me-sajib/json/main/services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
    setLoading(false);
  }, []);
  const id = useParams().id;
  const service = services.find((s) => s.id === id);

  const enrollCourse = () => {
    toast("Course Enrolled Successfully");
    setEnroll(true);
  };
  return (
    <div className="bg-dark">
      <div className="container py-5">
        {
          // if loading is true then show the loader
          loading && <Loading />
        }
        <h1 className="text-center text-light py-4">
          Enroll <span className="text-primary"> {service?.name}</span> Course
        </h1>
        <div className="row row-cols-1 row-cols-md-2 g-4 ">
          <div className="col">
            <img className="w-100" src={service?.image} alt="" />
          </div>
          <div className="col">
            <h1 className="text-primary">{service?.name}</h1>
            <h3 className="text-info">Price: ${service?.price}</h3>
            <p className="text-muted">{service?.description}</p>
            <p className="text-primary">{service?.details}</p>

            {
              // if enroll is true then show the button
              enroll ? (
                <p className="text-info">already enrolled</p>
              ) : (
                <button
                  onClick={enrollCourse}
                  className="btn btn-primary d-block w-75 mx-auto"
                >
                  ENROLL
                </button>
              )
            }
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
