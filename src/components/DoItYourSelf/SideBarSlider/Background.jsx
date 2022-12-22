import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { TfiPencil } from "react-icons/tfi";
import { GiPlainCircle } from "react-icons/gi";
import "./styles/background.css";
const colorArr = [
  "#FB0D0D",
  "#E07715",
  "#E9D310",
  "#A3EB2D",
  "#43EB09",
  "#0B96FA",
  "#07F3D7",
  "#0FF185",
  "#40AE6C",
  "#17ED53",
  "#1644E8",
  "#1709B2",
  "#AA12C3",
  "#AB1770",
  "#8A1430",
];
const Background = () => {
  return (
    <div className="background-div">
      <div className="search-div">
        <IoSearchSharp className="icon" />{" "}
        <input
          type="text"
          name="searcg_template"
          placeholder="Search templates"
        />
      </div>
      <div className="solidClr_container">
        <div className="solid-clr">
          <p className="p">Solid</p>
          <div styel={{ display: "flex" }}>
            <span>
              <TfiPencil />
            </span>
            <span>
              <GiPlainCircle style={{ color: "#3A3A3A" }} />
            </span>
          </div>
        </div>
        <div className="colors">
          {colorArr.map((item, i) => {
            return (
              <div
                key={i}
                style={{ background: item, width: "27px", height: "27px" }}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="texture-div">
        <p className="p">Textures</p>
        <div className="textures">
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
        </div>
      </div>
      <div className="pattern-div">
        <p className="p">Pattern</p>
        <div className="patterns">
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
        </div>
      </div>
    </div>
  );
};

export default Background;
