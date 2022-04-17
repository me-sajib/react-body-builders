import React, { useRef } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const ResetPassword = () => {
  // reset password using react-firebase-hooks
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const emailRef = useRef("");

  const resetPassword = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      if (!error) {
        toast("Password reset email sent");
      } else {
        toast.error("enter your valid email");
      }
    } else {
      toast("please enter your valid email");
    }
  };
  return (
    <div className="bg-danger py-5">
      <div className="container">
        <h2 className="py-5 text-center text-light">Reset Your Password</h2>
        <form onSubmit={resetPassword}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="text-light">
              Enter Your Valid Email
            </label>
            <input
              ref={emailRef}
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
            />
          </div>
          {
            // if loading is true, show a spinner
            sending ? (
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
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ResetPassword;
