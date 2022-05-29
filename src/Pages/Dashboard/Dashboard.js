import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import Enrolled from "./Enrolled";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const [enroll, setEnroll] = useState([]);

  // post data to database
  const addProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const category = e.target.category.value;
    const service = { name, price, description, image, category };
    fetch("https://quiet-woodland-96649.herokuapp.com/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch("https://quiet-woodland-96649.herokuapp.com/enroll/" + user?.email)
      .then((res) => res.json())
      .then((data) => setEnroll(data));
    setLoading(false);
  }, [user?.email]);
  return (
    <div className="d-flex">
      <div
        style={{ width: "200px", height: "100vh" }}
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      >
        <h3>Dashboard </h3>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/dashboard">
              Enrolled
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-dark border w-100 border-light">
        <h1 className="text-center text-light py-2">Welcome to Dashboard</h1>
        <div className="mb-5 pb-5">
          {loading && <Loading />}
          <h2 className="text-light text-center pt-5">
            You Have Enrolled{" "}
            <span className="text-primary"> {enroll.length}</span> Courses
          </h2>
          <div className="row row-cols-1 w-75 mx-auto g-4 mt-5">
            {enroll.map((e) => (
              <Enrolled enroll={e} key={e._id} />
            ))}
          </div>
        </div>
        <form onSubmit={addProduct} className="w-50 text-light mx-auto mt-5">
          <h1 className="text-center py-2">Add Services</h1>
          <div className="mb-3">
            <label htmlFor="nameProduct" className="form-label">
              Name Of services
            </label>
            <input
              type="text"
              name="name"
              required
              id="nameProduct"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="des" className="form-label">
              Short Description
            </label>
            <textarea
              name="description"
              id="des"
              required
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="p" className="form-label">
              Price
            </label>
            <input
              type="number"
              name="price"
              required
              id="p"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="img" className="form-label">
              Photo url
            </label>
            <input
              type="text"
              name="image"
              required
              id="img"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cat" className="form-label">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="cat"
              required
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">ADD PRODUCT</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
