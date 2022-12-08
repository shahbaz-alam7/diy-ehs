import React, { useState, useRef } from "react";
import "./rightPanel.css";
import { BiDownload } from "react-icons/bi";
import { FaRegSave } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const RightSidePanel = () => {
  const [menuIcon, setMenuIcon] = useState(true);
  return (
    <>
      <div onClick={() => setMenuIcon(!menuIcon)}>
        <div className={menuIcon ? " active" : ""}>
          <div className="right-panel">
            <div className="right_panel_btn">
              {menuIcon ? (
                <AiOutlineRight className="icon" />
              ) : (
                <AiOutlineLeft className="icon" />
              )}
            </div>
            <div className="right_items">
              <div className="right_item">
                <BiDownload />
                <p>Download</p>
              </div>
              <div className="right_item">
                <FaRegSave />
                <p>Save</p>
              </div>
              <div className="right_item">
                <BsCart3 />
                <p>Order Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidePanel;
