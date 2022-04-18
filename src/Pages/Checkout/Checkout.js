import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Footer from "../Shared/Footer/Footer";
import Loading from "../Shared/Loading/Loading";

const Checkout = () => {
  const [services, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enroll, setEnroll] = useState(false);
  // user email and name access
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/me-sajib/json/main/services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
    setLoading(false);
  }, []);
  const id = useParams().id;
  const service = services.find((s) => s.id === id);

  const enrollCourse = (e) => {
    e.preventDefault();
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
          </div>
          <ToastContainer />
        </div>

        <div className="w-50 mx-auto text-light">
          <form onSubmit={enrollCourse}>
            <div className="form-group">
              <div className="mb-3">
                {/* name field */}
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                />
              </div>
              {/* phone field */}
              <div className="mb-3">
                <label htmlFor="exampleInputNumber" className="form-label">
                  Phone
                </label>
                <input
                  required
                  type="number"
                  name="number"
                  className="form-control"
                  id="exampleInputNumber"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={user && user?.email ? user?.email : ""}
                  {...(user && user?.email ? { disabled: true } : {})}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="select" className="form-label">
                  You are Enroll :
                </label>
                <select name="course" className="bg-info" id="select">
                  <option value="course">{service?.name}</option>
                </select>
              </div>
            </div>
            {
              // if enroll is true then show the button
              enroll ? (
                <p className="text-info">already enrolled</p>
              ) : (
                <button type="submit" className="btn btn-primary ">
                  ENROLL
                </button>
              )
            }
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
