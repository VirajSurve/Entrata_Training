import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header2.css";
import PopupContent from "./PopupContent";
import { UserContext } from "../../UserContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AnyTime from "../ADD/AnyTime21";
import Add_guest from "../ADD/Add_guest";
import Any_where from "../ADD/Any_where";

function Header2() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const { user } = useContext(UserContext);
  let firstLetter = "";
  if (user && user.name) {
    firstLetter = user.name.charAt(0).toUpperCase();
  }

  return (
    <header className="header">
      <Link to={"/"} href="" className="logo-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
          />
        </svg>
        <span className="logo">Four</span>
      </Link>

      <div className="search-container">
        <Popup
          trigger={<div className="cursor-pointer">AnyWhere</div>}
          position="bottom center"
          className="custom-popup"
          contentStyle={{
            width: "223px",
            height: "94px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            position: "absolute",
            zIndex: "999",
            pointerEvents: "auto",
            top: "140px",
            left: "40px",
          }}
          arrowStyle={{ display: "none" }}
        >
          <Any_where />
        </Popup>
        <div className="separator"></div>
        <Popup
          trigger={<div className="cursor-pointer">AnyTime</div>}
          position="bottom center"
          className="custom-popup"
          contentStyle={{
            width: "205px",
            height: "94px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            position: "absolute",
            zIndex: "999",
            pointerEvents: "auto",
            top: "140px",
            left: "40px",
          }}
          arrowStyle={{ display: "none" }}
        >
          <AnyTime />
        </Popup>
        <div className="separator"></div>
        <Popup
          trigger={<div className="cursor-pointer">Addguest</div>}
          position="bottom center"
          className="custom-popup"
          contentStyle={{
            width: "205px",
            height: "94px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            position: "absolute",
            zIndex: "999",
            pointerEvents: "auto",
            top: "140px",
            left: "40px",
          }}
          arrowStyle={{ display: "none" }}
        >
          <Add_guest />
        </Popup>
        <button className="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="search-icon"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      <div className="profile-container">
        <div onClick={togglePopup} className="profile1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="menu-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          {user && (
            <div className="circle-icon">
              <p className="first-letter">{firstLetter}</p>
            </div>
          )}
        </div>
        {isPopupOpen && <PopupContent close={closePopup} />}
      </div>
    </header>
  );
}

export default Header2;
