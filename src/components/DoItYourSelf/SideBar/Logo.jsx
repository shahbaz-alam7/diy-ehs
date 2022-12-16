import React from "react";
import "./styles/Logo.css";

const Logo = ({
  element,
  setOpenSlider,
  setSliderName,
  img,
  sliderName,
  color,
}) => {
  return (
    <div
      className={
        sliderName == element ? "logo_container active" : "logo_container"
      }
      style={{ background: color }}
      onClick={() => {
        setOpenSlider(true);
        setSliderName(element);
      }}
    >
      {img}
      <p>{element}</p>
    </div>
  );
};

export default Logo;
