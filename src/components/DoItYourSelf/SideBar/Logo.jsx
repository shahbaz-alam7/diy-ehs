import React from "react";
import { Home } from "@material-ui/icons";
import "./styles/Logo.css";

const Logo = ({ element, setOpenSlider, setSliderName, img, sliderName }) => {
  return (
    <div
      className={sliderName == element ? "logo_container active" : "logo_container"}
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
