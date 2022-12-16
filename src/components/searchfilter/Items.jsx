import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Portrait from "./helper/Portrait";
import Landscape from "./helper/Landscape";
import { data } from "./helper/posters.js";
import { useSelector , useDispatch} from "react-redux";
import styled from "styled-components";
import ImageComponent from "../DoItYourSelf/Canvas/ImageComponent";
import {getPageFromTemplate} from "../../reduxStore/actions/pageActions";
const Items = ({ itemName, setName ,loadPage}) => {
  const dispatch =useDispatch();
  const filter =useSelector(state=>state.projects.filter);
  const categoryTemplates = filter.categoryTemplates;
  console.log(categoryTemplates,"00000")
  const signalWords = data[0].signals;
  const Container = styled.div`
  
    width: 240px;
    height: 380px;
    border-radius:15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
    top:-50px;
    left:-2px;
    background-color: white;
    border:1px solid black
  `;
  return (
    <>
      <div className="items-box ">
        <p className="heading">
          <ArrowBackIcon onClick={() => setName("")} />
          {/* {itemName} */}
        </p>
        <p className="heading">Portrait</p>
        <div className="portrait-landscape-box ">
          {categoryTemplates.map(ele=>{
            return <div className="portrait">
            <div className="pictogram" onClick={dispatch(getPageFromTemplate({templateId:ele._id}))}>
              <img src={ele.templateImage} alt="templates" style={{width:"100%"}} />
            </div>
            </div>
          })}
        </div>
        <div className="portrait-landscape-box ">
          {signalWords.map((item, index) => {
            return <Portrait {...item} key={index} />;
          })}
        </div>
      </div>
      <div className="items-box ">
        <p className="heading">Landscape</p>
        <div className="portrait-landscape-box ">
          {signalWords.map((item, index) => {
            return <Landscape {...item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Items;