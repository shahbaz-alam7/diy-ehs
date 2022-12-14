import React, { useState } from "react";
import Logo from "./Logo";
import "./styles/SidePanel.css";
import TemplateOption from "../SideBarSlider/TemplateOption";
import TextStyle from "../SideBarSlider/TextStyles/TextStyle";
import Frames from "../SideBarSlider/Frames";
import LogosOption from "../SideBarSlider/LogosOption";

import { HiOutlineTemplate } from "react-icons/hi";
import { IoShapesOutline } from "react-icons/io5";
import { GoCloudUpload } from "react-icons/go";
import { SlFrame } from "react-icons/sl";
import { MdTextFields, MdPhotoSizeSelectLarge } from "react-icons/md";
import { RiStickyNoteLine } from "react-icons/ri";

const menu = [
  {
    element: "Template",
    img: <HiOutlineTemplate className="icon" />,
  },
  {
    element: "Shape",
    img: <IoShapesOutline className="icon" />,
  },
  {
    element: "Text",
    img: <MdTextFields className="icon" />,
  },
  {
    element: "Background",
    img: <SlFrame className="icon" />,
  },

  {
    element: "Canvas Size",
    img: <MdPhotoSizeSelectLarge className="icon" />,
  },
  {
    element: "Uploads",
    img: <GoCloudUpload className="icon" />,
  },
  {
    element: "Stickers",
    img: <RiStickyNoteLine className="icon" />,
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
              setOpenSlider={setOpenSlider}
              setSliderName={setSliderName}
            />
          );
        })}
      </div>
      {openSlider && (
        <div className="toggle-container-side ">
          {sliderName === "Template" && (
            <TemplateOption setOpenSlider={setOpenSlider} />
          )}

          {sliderName === "Text" && (
            <TextStyle
              setOpenSlider={setOpenSlider}
              setAddHeader={setAddHeader}
            />
          )}
          {sliderName === "Background" && <Frames setOpenSlider={setOpenSlider} />}
          {sliderName === "Stickers" && (
            <LogosOption setOpenSlider={setOpenSlider} />
          )}
        </div>
      )}
    </div>
  );
};

export default SidePanel;
