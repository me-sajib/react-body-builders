import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-primary">Create your account</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p className="mt-3">
          Already have an account ?
          <Link
            className="btn btn-link text-decoration-none text-info"
            to="/login"
          >
            Login{" "}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
