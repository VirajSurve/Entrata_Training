import React from "react";
import "./RightSide.css";
import "./LeftSide.css";
import Payment from "./Payment";
import { Link } from "react-router-dom";

function RightSide() {
  return (
    <div className="payment-div">
      <div className="top-box">
        <div className="mb-5">
          <p className="text-2xl font-semibold">Your trip</p>
        </div>

        <div className="mb-5">
          <div className="flex justify-between">
            <div>
              <p className="text-lg font-medium">Dates</p>
              <p>21–26 Sep</p>
            </div>
            <div className="underline font-medium cursor-pointer">Edit</div>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex justify-between">
            <div>
              <p className="text-lg font-medium">Guests</p>
              <p>1 guest</p>
            </div>
            <div className="underline font-medium cursor-pointer">Edit</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="horizontal-line1"></div>
      </div>
      <div className="Middle-box">
        <div className="flex justify-between">
          <div>
            <p className="text-2xl font-semibold">Pay with</p>
          </div>
          <div className="payment-icon flex gap-3">
            <img src="./Payment/Visa.png" alt="" className="ic1" />
            <img src="./Payment/MasterCard.jpg" alt="" className="ic1" />
            <img src="./Payment/rupay.png" alt="" className="ic2" />
            <img src="./Payment/Dinners Club.jpeg" alt="" className="ic1" />
          </div>
        </div>

        <div>
          <div className="upper-box flex items-center">
            <p className="r ml-4">Credit or debit card</p>
          </div>

          <Payment />

          <div className="custom-content1">
            <div className="inputbox1">
              <input
                type="text"
                id="card-number"
                name="card-number"
                required="required"
                placeholder="Card Number"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="horizontal-line1"></div>
      </div>

      <div className="last-box">
        <p className="text-2xl font-semibold mb-3">
          Cancellation policy: Firm 60 days
        </p>
        <p>
          This reservation is non-refundable.{" "}
          <span className="underline font-semibold cursor-pointer">
            Learn more
          </span>
        </p>
      </div>
      <div className="flex justify-center">
        <div className="horizontal-line1"></div>
      </div>
      <div className="last-box">
        <p className="text-xs mb-5">
          By selecting the button below, I agree to the{" "}
          <span className="underline font-semibold cursor-pointer">
            Host's House Rules, Ground rules for guests, Airbnb's Rebooking and
            Refund Policy
          </span>{" "}
          and that Airbnb can{" "}
          <span className="underline font-semibold cursor-pointer">
            charge my payment method{" "}
          </span>
          if I’m responsible for damage. I agree to book with Luxury Retreats
          International ULC.
        </p>
        <Link to="/account/bookings">
          <div className="pay-button flex justify-center cursor-pointer">
            <button className="text-white">Confirm and pay</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RightSide;
