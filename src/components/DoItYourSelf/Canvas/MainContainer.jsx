import React, {useState, useRef} from 'react'
import {Frame} from './index';
import "./styles/MainContainer.css";
import Download from './Download';
const MainContainer = ({openSlider,addHeader}) => {
  let styleSliderOpen={justifyContent:"flex-end", paddingRight:"10vw"};
  let styleSliderClose={justifyContent:"center"};
  
  return (
    <div className='main_container'style={openSlider?styleSliderOpen:styleSliderClose}>
      {openSlider}
      <div style={{backgroundColor:"white", width:"65vw", height:"6.7vh", position:"fixed", right:"0vw"}}>
        header
      </div>
      <Frame addHeader={addHeader}/>
      
    </div>
      
  )
}

export default MainContainer
