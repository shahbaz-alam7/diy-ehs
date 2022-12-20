import React, { useState } from "react";
import "../styles/editor.css";
// tools
import FontTools from "./tools/FontTools";
import DimensionTools from "./tools/DimensionTools";
import ShapesTools from "./tools/ShapesTools";
import ImageTools from "./tools/ImageTools";
import UndoRedoTool from "./tools/UndoRedoTool";
import OtherTools from "./tools/OtherTools";
<<<<<<< HEAD
const Editor = ({ textColor,setTextColor,tool, finalFont, setFinalFont, finalFontSize, setFinalFontSize}) => {
  console.log(tool,"psdfkojsdafiajsdjf")
=======
const Editor = ({
  tool,
  finalFont,
  setFinalFont,
  finalFontSize,
  setFinalFontSize,
  openSlider,
}) => {
  console.log(tool, "psdfkojsdafiajsdjf", openSlider);
>>>>>>> f6fe35ac73c83b14ffe3e21bdc456e1b341bfec7
  return (
    <div className={openSlider ? "editor" : "editor mx-width"}>
      <div className="editor-child">
        <UndoRedoTool />
        {tool === "Image-Tools" && <ImageTools />}
<<<<<<< HEAD
        {tool === "Font-Tools" && <FontTools textColor={textColor} setTextColor={setTextColor}  finalFont={finalFont} setFinalFont={setFinalFont} finalFontSize={finalFontSize} setFinalFontSize={setFinalFontSize}/>}
=======
        {tool === "Font-Tools" && (
          <FontTools
            finalFont={finalFont}
            setFinalFont={setFinalFont}
            finalFontSize={finalFontSize}
            setFinalFontSize={setFinalFontSize}
          />
        )}
>>>>>>> f6fe35ac73c83b14ffe3e21bdc456e1b341bfec7
        {tool === "Dimesion-Tools" && <DimensionTools />}
        {tool === "Shapes-Tools" && <ShapesTools />}
        <OtherTools />
      </div>
    </div>
  );
};

export default Editor;
