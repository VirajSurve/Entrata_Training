// PopupContent.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PopupContent.css";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../UserContext";

function PopupContent({ close }) {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  async function logout() {
    axios.post("http://localhost:4000/logout");
    setUser(null);
    setRedirect("/");
  }

  if (!user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = "profile";
  }

  return (
    <>
      <div className="anyq" onClick={close}></div>
      <div className="modal" onClick={() => close()}>
        <div className="content">
          <Link to="/account">
            <p className="font-medium">My Profile</p>
          </Link>
          <Link to="/account/bookings">
            <p className="font-medium">My Booking</p>
          </Link>
          <Link to="/account/places">
            <p className="font-medium">My Accomodation</p>
          </Link>
          <Link to="/wishlist">
            <p className="wishlist font-medium ">Wishlist</p>
          </Link>

          <hr />
          <p>Help Center</p>

          {subpage === "profile" && (
            <p>
              <button onClick={logout}>Logout</button>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default PopupContent;
