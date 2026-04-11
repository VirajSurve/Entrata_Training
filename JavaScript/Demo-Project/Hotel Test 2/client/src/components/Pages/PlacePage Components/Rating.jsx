import React, { useContext, useRef, useState } from "react";
// import { useGlobal } from '../../Provider';
import Hotel from "./Hotel";
import Features from "./Features";
import "./Rating.css";
import BookingDiv from "./BookingDiv.jsx";

export default function Rating({ place }) {
  // const {rate , review} = useGlobal();
  const windowWidth = useRef(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(windowWidth.current <= 768);

  return (
    <div className="extra-rating">
      <div className="stars review">
        <p className="guest">
          <span id="G">Guest</span>
          <br />
          favourite
        </p>
        <p className="recom">
          One of the most loved Homes on <br /> Airbnb, according to guests
        </p>
        <p id="rate ">
          <p className="move">{place.rate}</p>
          <br />

          {place.rate > 4 ? (
            <div className="rating-star">
              <i className="bi bi-star-fill inner"></i>
              <i className="bi bi-star-fill inner"></i>
              <i className="bi bi-star-fill inner"></i>
              <i className="bi bi-star-fill inner"></i>
              <i className="bi bi-star inner"></i>
            </div>
          ) : (
            <>
              <i className="bi bi-star-fill inner"></i>
              <i className="bi bi-star-fill inner"></i>
              <i className="bi bi-star-fill inner"></i>
              <i className="bi bi-star inner"></i>
              <i className="bi bi-star inner"></i>
            </>
          )}
        </p>
        <div className="vertical-line"></div>
        <div class="review-container">
          <p class="review-text">{place.reviews}</p>
          <span id="Reviews">
            <u>Reviews</u>
          </span>
        </div>
      </div>

      <div className="owner-profile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <p id="name">
          Hosted by {place.name}
          <br /> <span id="exp">Superhost</span>
        </p>
      </div>
      <hr />
      <Hotel place={place} />
      <Features place={place} />
      {/* {isSmallScreen && <BookingDiv place={place} />} */}
    </div>
  );
}
