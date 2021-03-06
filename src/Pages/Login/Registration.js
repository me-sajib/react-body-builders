import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import TitlePage from "../../Hooks/TitlePage";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin";

const Registration = () => {
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const registerUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pwd.value;
    const confirmPassword = e.target.pwd2.value;
    if (password !== confirmPassword) {
      toast("Password and Confirm Password must be same");
      return;
    }
    createUserWithEmailAndPassword(email, password);
    if (!error) {
      toast("send verification email, please check your email inbox or spam");
    }
  };

  if (user?.emailVerified) {
    navigate("/");
  }

  return (
    <div className="bg-dark text-light py-3">
      <TitlePage title="Registration Now -body builder" />
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
            // if any error occurs
            error && <div className="alert alert-danger">{error.message}</div>
          }
          {/* checkbox our terms and condition */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              onClick={() => setTerms(!terms)}
              id="terms"
              className="form-check-input"
            />

            <label className="form-check-label text-info" htmlFor="terms">
              Agree our terms and conditions
            </label>
          </div>

          {
            // if loading is true, show a spinner
            loading ? <Loading /> : ""
          }

          {
            // if terms is true, show a button
            terms ? (
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            ) : (
              <button disabled type="submit" className="btn btn-primary">
                Submit
              </button>
            )
          }
        </form>
        <br />
        {
          // if user not varified show a button
          user && !user?.emailVerified ? (
            <button
              className="btn btn-info my-3"
              onClick={async () => {
                await sendEmailVerification();
                toast(
                  "again send verification email, check inbox or spam folder"
                );
              }}
            >
              Send Verification Email Again
            </button>
          ) : (
            ""
          )
        }
        {
          // email verification message send
          sending ? <Loading /> : ""
        }
        <p className="mt-3">
          Already have an account ?
          <Link
            className="btn btn-link text-decoration-none text-info"
            to="/login"
          >
            Login{" "}
          </Link>
        </p>
      </div>

      <ToastContainer />
      <SocialLogin />
    </div>
  );
};

export default Registration;
