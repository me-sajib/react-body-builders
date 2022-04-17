import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Nav = () => {
  const [user] = useAuthState(auth);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Body Builder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/about">About</CustomLink>
            </li>

            <li className="nav-item">
              {
                //  conditional rendering user is logged in or not
                user ? (
                  <button
                    className="btn btn-link text-decoration-none text-muted"
                    onClick={() => signOut(auth)}
                  >
                    log-out
                  </button>
                ) : (
                  <CustomLink to="/login">Login</CustomLink>
                )
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
