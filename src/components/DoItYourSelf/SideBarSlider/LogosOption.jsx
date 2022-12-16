import React ,{useEffect, useState} from 'react'
import "./styles/logosOption.css"
//import Logos from '../FakeData/data/Logos';
import { useSelector, useDispatch } from 'react-redux';
import { getLogo } from '../../../reduxStore/actions/pageActions';
import {getAllLogo} from "../../../reduxStore/actions/filterAction"
const LogosOption = ({setOpenSlider}) => {

  const dispatch =useDispatch();
  const project = useSelector(state=>state.projects);
  const pageIndex = project.currentPage;
  const Logos = project.filter.logo;
  function clickHandler(ele){
    console.log("current page", project.currentPage);
    dispatch(getLogo({logoId:ele.id,pageIndex:pageIndex}))
  }
  useEffect(()=>{
    dispatch(getAllLogo());
  },[])
  return (
    <div>
      <div className= "frames_container">
      hi iam the template
      <button onClick={()=>{setOpenSlider(false)}}>close</button>
      <div style={{display:"flex",flexDirection:"column", gap:"20px"}}>
      {Logos.map(ele=>{
        return <div key={ele._id} style={{width:'50px', height:"50px" }} onClick={()=>{clickHandler(ele)}}>
          <img src={ele.logoURL} alt="#$44"  style={{width:'50px', height:"50px"}}/>
        </div>
      })}
      </div>
    </div>
    </div>
  )
}

export default LogosOption
