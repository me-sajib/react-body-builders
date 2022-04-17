import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [user] = useAuthState(auth);

  if (user) {
    console.log("user is logged in", user);
  }
  return (
    <div className="bg-dark text-light py-3">
      <div className="w-50 mx-auto my-4">
        <h1 className="text-center text-primary">Hi, Welcome Back</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
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
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
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
