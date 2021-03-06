import React from "react";
import { Link } from "react-router-dom";
import "./css/Service.css";

const Service = ({ services }) => {
  const { _id, name, price, image, description } = services;
  return (
    <div className="col">
      <div className="card bg-dark text-light card-hover">
        <img src={image} className="card-img-top " alt="..." />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <h4 className="card-title">Price: ${price}</h4>
          <p className="card-text">{description}.</p>
          <Link
            to={"/checkout/" + _id}
            className="btn btn-outline-primary d-block w-100"
          >
            Enroll this course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
