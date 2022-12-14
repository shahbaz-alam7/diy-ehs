import React, { useEffect, useState } from "react";
import "./styles/logosOption.css";
//import Logos from '../FakeData/data/Logos';
import { useSelector, useDispatch } from "react-redux";
import { getLogo } from "../../../reduxStore/actions/pageActions";
import { getAllLogo } from "../../../reduxStore/actions/filterAction";
const LogosOption = ({ setOpenSlider }) => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projects);
  const pageIndex = project.currentPage;
  const Logos = project.filter.logo;
  function clickHandler(ele) {
    // console.log("current page", project.currentPage);
    dispatch(getLogo({ logo:ele, pageIndex: pageIndex }));
  }
  useEffect(() => {
    dispatch(getAllLogo());
  }, []);
  return (
    <div>
      <div className="frames_container">
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
