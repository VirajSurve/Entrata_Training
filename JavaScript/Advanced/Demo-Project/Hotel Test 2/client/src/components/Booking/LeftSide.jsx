import React from "react";
import "./LeftSide.css";

function LeftSide() {
  return (
    <div className="book-page">
      <div className="top-box flex">
        <div className="img-div mr-5">
          <img src="" alt="" className="book-img" />
        </div>
        <div className="flex items-center">
          <div>
            <p></p>
            <p className="text-gray-500"></p>
            <p>
              <i className="bi bi-star-fill"></i>
              <span className="text-gray-500">( reviews)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="horizontal-line"></div>
      </div>
      <div className="Middle-box">
        <p className="text-2xl font-semibold">Price details</p>
        <div className="flex justify-between mt-5">
          <p>$81,611.24 x 5 nights</p>
          <p></p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="horizontal-line"></div>
      </div>
      <div className="Middle-box">
        <div className="flex justify-between">
          <p className="text-base font-medium">Total (INR)</p>
          <p></p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="horizontal-line"></div>
      </div>
      <div className="last-box">
        <p className="text-sm text-gray-700">
          This property requires a security deposit. It will be collected
          separately by the property prior to your arrival or at check-in.
        </p>
      </div>
    </div>
  );
}

export default LeftSide;
