import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Courses.css";
const Courses = (props) => {
  const { name, img, instructor, price, addHandler } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={img} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <small style={{ color: "gray" }}>{instructor}</small>
          <br /> $<b>{price}</b>
        </p>
        <a
          href="#"
          className="btn btn-primary"
          onClick={() => {
            addHandler(props);
          }}
        >
          add to cart
        </a>
      </div>
    </div>
  );
};

export default Courses;
