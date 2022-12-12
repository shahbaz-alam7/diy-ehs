import React from "react";
import "./styles.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import poster from "./img/poster.png";
import utility from "./img/utility-stricker.png";
import floor_graphics from "./img/floor_graphics.png";
import signages from "./img/signages.png";
import Portrait from "./helper/Portrait";
import Landscape from "./helper/Landscape";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
const Home = ({ setName }) => {
  const [categroyId , setCategoryId] =useState();
  const dispatch = useDispatch();
  let filter= useSelector(state=>state.projects.filter);
  let category=filter.category;
  console.log("jkdsfjkgsdfgjdfgjk categroy",category);
  useEffect(()=>{
    dispatch({type:"CATEGORY"})
  },[])
  return (
    <div className="div-home-container">
      
      <div className="diy-home-mid">
        <p className="heading">Categories We Offer</p>
        <div className="categories">
          
          {category.map(ele=>{
            
            return <div className="category" onClick={() => {dispatch({type:"CATEGORY_TEMPALTES", payload :{categoryid:ele.id}});setName(ele.categoryName)}}>
                      <img src={ele.categoryLogo} alt="" />
                      <p className="caption">{ele.categoryName}</p>
                    </div>
          })}
        </div>
      </div>
      <div className="diy-home-btm">
        <p className="heading">All Categories</p>
        <div className="div">
          
          <Portrait title="Notice" color="#00E0FF" />
          <Portrait title="Danger" color="#FF0000" />
          <Portrait title="Caution" color="#FFE500" />
          <Portrait title="Caution" color="#FFE500" />
        </div>
      </div>
    </div>
  );
};

export default Home;