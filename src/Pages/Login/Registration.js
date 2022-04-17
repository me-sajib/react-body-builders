import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import auth from "../../firebase.init";

const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const registerUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pwd.value;
    const confirmPassword = e.target.pwd2.value;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="bg-dark text-light py-3">
      <div className="container my-5 w-50 mx-auto">
        <h1 className="text-center text-primary">Create your account</h1>
        <form onSubmit={registerUser}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input type="email" name="email" className="form-control" />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" name="pwd" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input type="password" name="pwd2" className="form-control" />
          </div>

          {
            // if user is register
            user && (
              <div className="alert alert-success">
                <b>Registration successful.</b>{" "}
                <Link to="/login" className="btn btn-link text-primary">
                  Login Now
                </Link>
              </div>
            )
          }
          {
            // if any error occurs
            error && <div className="alert alert-danger">{error.message}</div>
          }
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className="form-check-label text-danger"
              htmlFor="exampleCheck1"
            >
              Agree term and conditions
            </label>
          </div>

          {
            // if loading is true, show a spinner
            loading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              ""
            )
          }
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
    </div>
  );
};

export default Registration;
