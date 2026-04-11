// src/components/Pages/PlacePage Components/Information.jsx
import React, { useContext, useEffect, useRef, useState } from "react";
import Rating from "./Rating";
import { UserContext } from "../../../UserContext";
import "./Information.css";
import { differenceInCalendarDays, format } from "date-fns";
import { Navigate } from "react-router-dom";
import api from "../../../api/axiosConfig.js"; // <-- Import client

export default function Information({ place }) {
  const { startDate, setStartDate, endDate, setEndDate, guests, setGuests } = useContext(UserContext);
  const { user } = useContext(UserContext);
  
  const [name, setName] = useState(user?.name || "");
  const [mobile, setMobile] = useState("");
  const [redirect, setRedirect] = useState("");
  
  const windowWidth = useRef(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(windowWidth.current <= 768);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);
  
  let numberOfNights = 0;
  if (startDate && endDate) {
    numberOfNights = differenceInCalendarDays(new Date(endDate), new Date(startDate));
  }

  const handleStartDateChange = (event) => setStartDate(event.target.value);
  const handleEndDateChange = (event) => setEndDate(event.target.value);
  const formatDateToInputValue = (date) => date ? format(new Date(date), "yyyy-MM-dd") : "";

  async function handleBooking() {
    if (!user) {
      alert("Please log in to make a booking.");
      return;
    }
    if (numberOfNights <= 0) {
      alert("Please select a valid check-in and check-out date.");
      return;
    }
    if (!name || !mobile) {
      alert("Please fill in your name and mobile number.");
      return;
    }

    try {
      const response = await api.post("/bookings", {
        place: place._id,
        checkIn: startDate,
        checkOut: endDate,
        numberOfGuests: guests,
        name,
        phone: mobile,
        price: numberOfNights * place.price,
      });
      const bookingId = response.data._id;
      setRedirect(`/account/bookings/${bookingId}`);
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again later.");
    }
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="center">
      <div className="information">
        <div className="info">
          <p className="type address">{place.address}</p>
          <p className="space">Max Guests: {place.maxGuests}</p>
          <Rating place={place} />
        </div>
        {!isSmallScreen && (
          <div className="chart">
            <p id="price" className="text-2xl text-center mb-2">
              Price: ${place.price} / per night
            </p>
            <div className="border rounded-2xl">
              <div className="md:flex">
                <div className="px-4 py-4">
                  <label>Check In: </label>
                  <input type="date" value={formatDateToInputValue(startDate)} onChange={handleStartDateChange} />
                </div>
                <div className="px-4 py-4 border-l">
                  <label>Check Out: </label>
                  <input type="date" value={formatDateToInputValue(endDate)} onChange={handleEndDateChange} />
                </div>
              </div>
              <div className="px-4 py-4 border-t">
                <label>Number of guests: </label>
                <input
                  className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1"
                  type="number"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>
              {user && (
                <>
                  <div className="px-4 py-4 border-t">
                    <label>Your Full Name:</label>
                    <input className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="px-4 py-4 border-t">
                    <label>Mobile Number:</label>
                    <input className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1" type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                  </div>
                </>
              )}
            </div>
            <button className="bookbutton text-white font-bold" onClick={handleBooking}>
              Reserve
              {numberOfNights > 0 && (
                <span> for ${numberOfNights * place.price}</span>
              )}
            </button>
            <p className="text-gray-500 text-sm mt-2">You won't be charged yet</p>
          </div>
        )}
      </div>
    </div>
  );
}