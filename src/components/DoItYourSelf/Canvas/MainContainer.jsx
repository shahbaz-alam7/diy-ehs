import React, { useState, useRef } from "react";
import { Frame } from "./index";
import "./styles/MainContainer.css";
import Download from "./Download";
import FontStyleComp from "./header/FontStyleComp";
const MainContainer = ({ openSlider, addHeader }) => {
  let styleSliderOpen = { justifyContent: "flex-end", paddingRight: "10vw" };
  let styleSliderClose = { justifyContent: "center" };

  return (
    <div
      className="main_container"
      style={openSlider ? styleSliderOpen : styleSliderClose}
    >
      {openSlider}
      <Frame addHeader={addHeader} />
    </div>
  );
};

export default MainContainer;
