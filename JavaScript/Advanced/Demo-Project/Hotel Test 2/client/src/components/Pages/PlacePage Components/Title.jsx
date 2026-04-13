import React from "react";
import { Link } from "react-router-dom";
import "./Title.css";

function Title({ place }) {
  return (
    <div>
      <div className="front">
        <h1 className="title">{place.title}</h1>
        <div className="title-panel right-side flex items-center">
          <Link to="/">
            <button className="">
              <i className="bi bi-house"></i>
              <span className="hidden md:block"> Back to Home</span>
            </button>
          </Link>
          <Link to="/wishlist">
            <button className="">
              <i className="bi bi-heart"></i>
              <span className="hidden md:block">Wishlist</span>
            </button>
          </Link>
          <button className="">
            <i className="bi bi-upload"></i> <span className="hidden md:block">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Title;
