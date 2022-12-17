import React from "react";
import "./styles/canvasSize.css";
import { IoSearchSharp } from "react-icons/io5";
const CanvasSize = ({ setOpenSlider }) => {
  return (
    <div className="canvas_size">
      <div className="search-div">
        <IoSearchSharp className="icon" />{" "}
        <input
          type="text"
          name="searcg_template"
          placeholder="Search templates"
        />
      </div>
      <div className="categories-div-panel">
        <p className="heading">Sizes</p>

        <div className="category">
          <p>Dimension 1</p>
        </div>
        <div className="category">
          <p>Dimension 2</p>
        </div>
        <div className="category">
          <p>Dimension 3</p>
        </div>
        <div className="category">
          <p>Dimension 4</p>
        </div>
      </div>
      <div className="categories-div-panel">
        <p className="heading">Categories Standard Sizes</p>

        <div className="category">
          <p>Posters</p>
        </div>
        <div className="category">
          <p>Floor Graphics</p>
        </div>
        <div className="category">
          <p>Signages</p>
        </div>
        <div className="category">
          <p>Utility Stickers</p>
        </div>
        <div className="categories-div-panel">
          <p className="heading">Orinetation</p>

          <div className="category">
            <p>Portrait</p>
          </div>
          <div className="category">
            <p>Landscape</p>
          </div>
        </div>
      </div>
      <div className="recent-designs">
        <p className="heading">Paper Types</p>
        <div className="designs"></div>
        <div className="designs"></div>
        <div className="designs"></div>
        <div className="designs"></div>
        <div className="designs"></div>
      </div>
    </div>
  );
};

export default CanvasSize;
