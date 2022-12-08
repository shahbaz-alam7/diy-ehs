import React, { Component, useState } from "react";
import FontPicker from "font-picker-react";
import "../styles/font.css"
const FontPickerComp = ({ finalFont, setFinalFont }) => {
  
  return (
    <div style={{color:"black",height:"3vh", width:"100px"}} >
      <FontPicker
        style={{color:"pink"}}
        apiKey="AIzaSyDZyIxM4tyvQ9iwAxC9R7wZJilaORy5waw"
        activeFontFamily={finalFont}
        limit={200}
        onChange={(nextFont) => {
          setFinalFont(nextFont.family);
        }}
      />
    </div>
  );
};
export default FontPickerComp;