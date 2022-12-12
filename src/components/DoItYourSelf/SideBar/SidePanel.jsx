import React, { useState } from 'react'
import Logo from "./Logo";
import "./styles/SidePanel.css";
import TemplateOption from '../SideBarSlider/TemplateOption';
import TextStyle from "../SideBarSlider/TextStyles/TextStyle";
import Frames from '../SideBarSlider/Frames';
import LogosOption from '../SideBarSlider/LogosOption';
const SidePanel = ({openSlider ,setOpenSlider,setAddHeader}) => {
  
  const [sliderName, setSliderName] =useState("");
  return (
    <div className='sidepanel_container'>
      <Logo element={"Template"} setOpenSlider={setOpenSlider} setSliderName={setSliderName}/>
      <Logo element={"Frames"} setOpenSlider={setOpenSlider} setSliderName={setSliderName}/>
      <Logo element={"Elements"} setOpenSlider={setOpenSlider} setSliderName={setSliderName}/>
      <Logo element={"Text"} setOpenSlider={setOpenSlider} setSliderName={setSliderName} />
      <Logo element={"Uploads"} setOpenSlider={setOpenSlider} setSliderName={setSliderName}/>
      <Logo element={"Logos"} setOpenSlider={setOpenSlider} setSliderName={setSliderName}/>
      <Logo element={"Project"} setOpenSlider={setOpenSlider} setSliderName={setSliderName}/>
      {openSlider&& sliderName==="Template" && <TemplateOption setOpenSlider={setOpenSlider}/>}
      {openSlider&& sliderName==="Text" && <TextStyle setOpenSlider={setOpenSlider} setAddHeader={setAddHeader} />}
      {openSlider&& sliderName==="Frames" && <Frames setOpenSlider={setOpenSlider}/>}
      {openSlider&& sliderName==="Logos" && <LogosOption setOpenSlider={setOpenSlider}/>}
    </div>
  )
}

export default SidePanel
