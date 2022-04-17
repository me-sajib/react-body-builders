import React from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";

const Login = () => {
  // sign in with email and password using react-firebase-hooks
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // reset password using react-firebase-hooks
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  // get the location from react-router-dom
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // if user is login with email and password
  const loginUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  // navigate to the page from where user came
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="bg-dark text-light py-3">
      <div className="w-50 mx-auto my-4">
        <h1 className="text-center text-primary">Hi, Welcome Back</h1>
        <form onSubmit={loginUser}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              required
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          {
            // if any error occurs
            error && <div className="alert alert-danger">{error.message}</div>
          }
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
            LOGIN
          </button>
          <p className="mt-3">
            Forgat password?{" "}
            <button className="btn btn-link text-primary">
              {" "}
              reset password
            </button>
          </p>
          <p className="mt-3">
            Are you new to Body Builder?
            <Link
              to="/register"
              className="btn btn-link text-info text-decoration-none"
            >
              Create an account
            </Link>
          </p>
        </form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
