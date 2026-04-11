import React from "react";
import Heading from "./Heading";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Header2 from "../Header/Header2";

function FourthPage() {
  return (
    <div>
      <Header2 />
      <hr />
      <Heading />
      <div className="flex justify-center">
        <RightSide />
        <LeftSide />
      </div>
    </div>
  );
}

export default FourthPage;
