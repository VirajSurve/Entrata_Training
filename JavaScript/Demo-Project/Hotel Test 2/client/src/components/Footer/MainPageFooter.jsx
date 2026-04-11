import React, { useState } from "react";
import "./MainPageFooter.css";
import Footer from "./Footer"; // Assuming Footer is your popup component

function MainPageFooter() {
  const [isPopped, setIsPopped] = useState(false);

  function togglePopup1() {
    setIsPopped(!isPopped);
  }

  function closePopup1() {
    setIsPopped(false);
  }

  return (
    <div>
      <div className="md:footer-container hidden">
        <hr />
        <div className="i mt-3">
          <div className="i1">
            <p>©{new Date().getFullYear()} Airbnb, Inc.</p>
            <p>·</p>
            <p>Privacy</p>
            <p>·</p>
            <p>Terms</p>
            <p>·</p>
            <p>Sitemap</p>
            <p>·</p>
            <p>Company details</p>
          </div>
          <div className="i2">
            <p>English (IN)</p>
            <p>₹ INR</p>
            <div className="flex gap-3">
              <p>Support & Resources</p>
              <button onClick={togglePopup1}>
                <i
                  className="bi bi-chevron-down"
                  style={{ fontSize: "20px" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isPopped && <Footer close={closePopup1} />}
    </div>
  );
}
export default MainPageFooter;
