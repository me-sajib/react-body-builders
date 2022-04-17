import React from "react";
import { Link } from "react-router-dom";
import "./css/Service.css";

const Service = ({ services }) => {
  const { id, name, price, image, description } = services;
  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top " alt="..." />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <h4 className="card-title">Price: ${price}</h4>
          <p className="card-text">{description}.</p>
          <Link
            to={"/checkout/" + id}
            className="btn btn-primary d-block w-100"
          >
            Enroll this course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
