import React from 'react'
import { Home } from '@material-ui/icons';
import "./styles/Logo.css";

const Logo = ({element,setOpenSlider,setSliderName}) => {
  return (
    <div className='logo_container' onClick={()=>{setOpenSlider(true);setSliderName(element)}}>
        <Home style={{marginBottom:"-10px", border:"1px solid black",backgroundColor:"gray", padding :"10px"}}/>
        <p>{element}</p>
    </div>
  )
}

export default Logo
