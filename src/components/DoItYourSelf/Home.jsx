import React ,{useState} from 'react'
import {MainContainer} from "./Canvas";
import SidePanel from './SideBar/SidePanel';

import "./Home.css";
const Home = () => {
  
  const [openSlider, setOpenSlider] =useState(false);
  const [addHeader, setAddHeader] =useState(false);
  return (
    <div className='home_container'>
      <SidePanel openSlider={openSlider} setOpenSlider={setOpenSlider} setAddHeader={setAddHeader}/>
      <MainContainer openSlider={openSlider} addHeader={addHeader}/>
    </div>
  )
}

export default Home
