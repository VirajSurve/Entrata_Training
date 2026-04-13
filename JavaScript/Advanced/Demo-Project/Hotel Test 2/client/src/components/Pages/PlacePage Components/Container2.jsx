import React from "react";
// import logo from './mountain'
export default function Container2({ img, mean }) {
  return (
    <div className="c1">
      <img className="icon1" src={img} alt={mean} />
      <p>{mean}</p>
    </div>
  );
}
