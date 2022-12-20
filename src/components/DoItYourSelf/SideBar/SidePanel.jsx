import React, { useState } from "react";
import Logo from "./Logo";
import "./styles/SidePanel.css";
import TemplateOption from "../SideBarSlider/TemplateOption";
import TextStyle from "../SideBarSlider/TextStyles/TextStyle";
import Frames from "../SideBarSlider/Frames";
import LogosOption from "../SideBarSlider/LogosOption";
import {
  template,
  shape,
  text,
  bg,
  canvasSize,
  upload,
  sticker,
} from "../Image/header/pic";
import { IoArrowBack } from "react-icons/io5";
import CanvasSize from "../SideBarSlider/CanvasSize";
import UploadFile from "../SideBarSlider/UploadFile";
import Background from "../SideBarSlider/Background";

const menu = [
  {
    element: "Template",
    img: template,
    color: "#494FBF",
  },
  {
    element: "Shapes",
    img: shape,
    color: "#4449A5",
  },
  {
    element: "Text",
    img: text,
    color: "#353AA5",
  },
  {
    element: "Background",
    img: bg,
    color: "#323680",
  },

  {
    element: "Canvas Size",
    img: canvasSize,
    color: "#2A2D65",
  },
  {
    element: "Uploads",
    img: upload,
    color: "#1F224D",
  },
  {
    element: "Stickers",
    img: sticker,
    color: "#171938",
  },
];

const SidePanel = ({ openSlider, setOpenSlider, setAddHeader }) => {
  const [sliderName, setSliderName] = useState("");
  return (
    <div className="sidepanel_container">
      <div className="menu">
        {menu.map((item, i) => {
          return (
            <Logo
              element={item.element}
              sliderName={sliderName}
              img={item.img}
              color={item.color}
              setOpenSlider={setOpenSlider}
              setSliderName={setSliderName}
              openSlider={openSlider}
            />
          );
        })}
      </div>
      {openSlider && (
        <div className="toggle-container-side ">
          <div className="back-div">
            <IoArrowBack
              className="back-btn"
              onClick={() => {
                setOpenSlider(false);
              }}
            />
          </div>
          {sliderName === "Template" && (
            <TemplateOption setOpenSlider={setOpenSlider} />
          )}
          {sliderName === "Shapes" && <Frames setOpenSlider={setOpenSlider} />}
          {sliderName === "Text" && (
            <TextStyle
              setOpenSlider={setOpenSlider}
              setAddHeader={setAddHeader}
            />
          )}
          {sliderName === "Background" && (
            <Background setOpenSlider={setOpenSlider} />
          )}
          {sliderName === "Canvas Size" && (
            <CanvasSize setOpenSlider={setOpenSlider} />
          )}
          {sliderName === "Uploads" && (
            <UploadFile setOpenSlider={setOpenSlider} />
          )}
          {sliderName === "Stickers" && (
            <LogosOption setOpenSlider={setOpenSlider} />
          )}
        </div>
      )}
    </div>
  );
};

export default SidePanel;
