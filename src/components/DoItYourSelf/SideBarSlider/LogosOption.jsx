import React, { useEffect, useState } from "react";
import "./styles/logosOption.css";
//import Logos from '../FakeData/data/Logos';
import { useSelector, useDispatch } from "react-redux";
import { getLogo } from "../../../reduxStore/actions/pageActions";
import { getAllLogo } from "../../../reduxStore/actions/filterAction";
import { IoSearchSharp } from "react-icons/io5";
const LogosOption = ({ setOpenSlider }) => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projects);
  const pageIndex = project.currentPage;
  const Logos = project.filter.logo;
  function clickHandler(ele) {
    console.log("current page", project.currentPage);
    dispatch(getLogo({ logoId: ele.id, pageIndex: pageIndex }));
  }
  useEffect(() => {
    dispatch(getAllLogo());
  }, []);
  return (
    <div>
      <div className="frames_container">
        <div className="search-div">
          <IoSearchSharp className="icon" />{" "}
          <input
            type="text"
            name="searcg_template"
            placeholder="Search templates"
          />
        </div>
        <div className="sticker-container">
          {Logos.map((ele) => {
            return (
              <div
                key={ele._id}
                className="sticker"
                onClick={() => {
                  clickHandler(ele);
                }}
              >
                <img src={ele.logoURL} alt="#$44" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LogosOption;
