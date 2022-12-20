import React, { useState } from "react";
import Icon from "../helper/Icon";

import FontSize from "../helper/FontSize";
import FontWeight from "../helper/FontWeight";
import FontComponent from "../helper/FontFamily";
import ColorPalette from "../ColorPalette";
import { FiAlignCenter } from "../icons";
const FontTools = ({textColor,setTextColor,finalFont,setFinalFont,finalFontSize, setFinalFontSize}) => {
  //const [finalFont, setFinalFont] = useState("Open Sans");

  return (
    <div className="Font-Tools flex">
      <FontComponent finalFont={finalFont} setFinalFont={setFinalFont} />
      <FontWeight />
      <FontSize finalFontSize={finalFontSize} setFinalFontSize={setFinalFontSize}/>
      <ColorPalette textColor={textColor} setTextColor={setTextColor} />
      <div className="hex-code">
        <p>{textColor}</p>
      </div>
      <Icon icon={<FiAlignCenter className="icon" />} />
    </div>
  );
};

export default FontTools;
