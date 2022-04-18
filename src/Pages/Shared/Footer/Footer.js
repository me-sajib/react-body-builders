import React from "react";
import body1 from "./images/body1.jpg";
import body2 from "./images/body2.jpg";
import body3 from "./images/body3.jpg";
import body4 from "./images/body4.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg py-2 text-light">
      <div className="container py-5 ">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <h2 className="mb-3">Stay Connect With Us</h2>
            <p>
              please subscribe our website and help to provide better services
            </p>
            <input
              type="email"
              placeholder="example@domain.com"
              className="form-control w-75  w-block"
            />
            <textarea
              name="comment"
              className="form-control w-75  w-block mt-3"
              cols="30"
              placeholder="Write your comment here"
              rows="2"
            ></textarea>
            <button className="btn btn-primary mt-3">Subscribe</button>
          </div>
          <div className="col">
            <h2 className="mb-3">Our Services</h2>
            {/* our services list group */}
            <div className="list-group w-75 ">
              <p className="list-group-item list-group-item-action list-group-item-primary">
                Weight Training
              </p>
              <p className="list-group-item list-group-item-action list-group-item-secondary">
                Cardio Training
              </p>
              <p className="list-group-item list-group-item-action list-group-item-success">
                Zumba
              </p>

              <p className="list-group-item list-group-item-action list-group-item-warning">
                Dance
              </p>
              <p className="list-group-item list-group-item-action list-group-item-info">
                Personal Training
              </p>

              <p className="list-group-item list-group-item-action list-group-item-dark">
                Yoga
              </p>
            </div>
          </div>
          {/* our body builder show */}
          <div className="col">
            <h2 className="mb-3">Our Body Builders</h2>
            <div className="row row-cols-1 row-cols-md-3 g-2 body-images">
              <div className="col">
                <img className="w-100" src={body1} alt="" />
              </div>
              <div className="col">
                <img className="w-100" src={body2} alt="" />
              </div>
              <div className="col">
                <img className="w-100" src={body3} alt="" />
              </div>
              <div className="col">
                <img className="w-100 " src={body4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center ">copyright &copy; by 2022</p>
    </div>
  );
};

export default Footer;
