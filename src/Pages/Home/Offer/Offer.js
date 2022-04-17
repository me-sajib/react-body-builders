import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <div className="offer-area offer-bg">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="offer_text">
              <h4>A BIG OFFER FOR THIS SUMMER</h4>
              <h3>50% Off</h3>
              <p>
                This summer our best offer provide you with a big discount on
                all our services.
              </p>
              <a href="/" className="boxed-btn3">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
