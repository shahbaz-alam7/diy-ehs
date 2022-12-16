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
        <div style={{position:"absolute", top:"10px", cursor:"pointer"}}>
          <span style={{color:"red", border:"1px solid black", margin:"5px"}}>undo</span>
          <span style={{color:"blue",border:"1px solid black",margin:"5px"}}>redo</span>
        </div>
        
      </div>
      <Frame addHeader={addHeader}/>
      
    </div>
      
  )
}

export default MainContainer
