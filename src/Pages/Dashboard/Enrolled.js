import React from "react";

const Enrolled = ({ enroll }) => {
  const { enrolled, price } = enroll;
  return (
    <div className="col text-light mt-5">
      <div className="d-flex gap-5 justify-content-center">
        <h4>{enrolled}</h4>
        <h4>{price}</h4>
        <button className="btn  btn-outline-danger">DELETE</button>
      </div>
    </div>
  );
};

export default Enrolled;
