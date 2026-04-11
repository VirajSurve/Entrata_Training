import React from "react";
import "./RightSide.css";
import "./LeftSide.css";

function Payment() {
  return (
    <div className="custom-content mt-5">
      <div className="inputbox1">
        <input
          type="text"
          id="card-number"
          name="card-number"
          required="required"
          placeholder="Card Number"
        />
      </div>
      <div className="inputbox1">
        <input
          type="text"
          id="expiration"
          name="expiration"
          required="required"
          placeholder="Expiration"
        />
      </div>
      <div className="inputbox1">
        <input
          type="text"
          id="ccv"
          name="ccv"
          required="required"
          placeholder="CCV"
        />
      </div>
    </div>
  );
}

export default Payment;
