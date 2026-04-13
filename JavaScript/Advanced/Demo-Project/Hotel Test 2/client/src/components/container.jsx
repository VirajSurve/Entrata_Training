import { Link } from "react-router-dom";
import Button from "./Button";
import React, { useState } from "react";

function Container(props) {
  return (
    <div className="container">
      <div className="heart">
        <Button />
      </div>
      <Link to="/place/:id">
        <img className="box-img" src={props.img} alt="villa" />
      </Link>

      <div className="rating">
        <p className="place">{props.place}</p>
        <p className="place1">
          <i className="bi absolute bi-star-fill"></i>
          {props.rate}
        </p>
      </div>
      <p className="side">{props.side}</p>
      <p className="price">
        {props.price} <span id="period">nigh</span>
      </p>
    </div>
  );
}

export default Container;
