import React, { useContext, useEffect, useRef, useState } from "react";
import Container2 from "./Container2";
import { UserContext } from "../../../UserContext";
import { icons } from "./icons";
import "./Features.css";
import Mapp from "./Mapp";
import Reviews from "./Reviews";
import BookingDiv from "./BookingDiv"; 
import axios from "axios";

export default function Features({ place }) {
  const { icon, setIcon } = useContext(UserContext);
  const windowWidth = useRef(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(windowWidth.current <= 768);
  const [redirect, setRedirect] = useState("");
  const { startDate, setStartDate, endDate, setEndDate, guests, setGuests } =
    useContext(UserContext);
  const [showBookingDiv, setShowBookingDiv] = useState(false); 
  let numberOfNights = 0;
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (place && place.perks) {
      const newIcon = icons.filter((icon) => place.perks.includes(icon.view));
      setIcon(newIcon);
    }
  }, [place, setIcon]);

  const handleBookNowClick = () => {
    setShowBookingDiv(true);
  };

  const handleCloseBookingDiv = () => {
    setShowBookingDiv(false);
  };

  return (
    <div className="extra2">
      <div className="do">
      {place.perks.length > 0 && (
        <h1 className="offer">What this place offers</h1>
      )}
      <div className="col">
        <div className="col1">
          {icon.map((f_i) => (
            <Container2 key={f_i.key} img={f_i.img} mean={f_i.view} />
          ))}
        </div>
      </div>
    </div>
    {isSmallScreen && <>
      <Mapp place={place} />
      <Reviews place={place} />
      <div className="booking-button">
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now!</button>
      </div>
    </>}
    
    {/* Render the BookingDiv component */}
    {showBookingDiv && (
      <div className="booking-div-overlay">
        <div className="booking-div-container">
          <button className="close-button" onClick={handleCloseBookingDiv}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="size-7">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
          </button>
          <BookingDiv place={place} />
          
        </div>
      </div>
    )}
    
    </div>
  );
}
