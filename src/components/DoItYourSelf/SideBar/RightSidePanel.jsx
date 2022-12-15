import React, { useState, useRef } from "react";
import "./rightPanel.css";
import { BiDownload } from "react-icons/bi";
import { FaRegSave } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const RightSidePanel = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  return (
    <>
      <div className="right-panel">
        <div className="right_items">
          <div className="right_item">
            <div className="item"></div>
          </div>
          <div className="right_item">
            <div className="item"></div>
          </div>
          <div className="right_item">
            <div className="item"></div>
          </div>
          <div className="right_item">
            <div className="item"></div>
          </div>
          <div className="right_item">
            <div className="item"></div>
          </div>
          <div className="right_item">
            <div className="item"></div>
          </div>
          <div className="right_item">
            <div className="item"></div>
          </div>
          <div className="right_item">
            <div className="item"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidePanel;
