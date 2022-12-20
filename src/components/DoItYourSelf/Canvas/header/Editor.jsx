import React, { useState } from "react";
import "../styles/editor.css";
// tools
import FontTools from "./tools/FontTools";
import DimensionTools from "./tools/DimensionTools";
import ShapesTools from "./tools/ShapesTools";
import ImageTools from "./tools/ImageTools";
import UndoRedoTool from "./tools/UndoRedoTool";
import OtherTools from "./tools/OtherTools";

const Editor = ({openSlider, textColor,setTextColor,tool, finalFont, setFinalFont, finalFontSize, setFinalFontSize}) => {
  console.log(tool,"psdfkojsdafiajsdjf")

  console.log(tool, "psdfkojsdafiajsdjf", openSlider);
  return (
    <div className={openSlider ? "editor" : "editor mx-width"}>
      <div className="editor-child">
        <UndoRedoTool />
        {tool === "Image-Tools" && <ImageTools />}

        {tool === "Font-Tools" && <FontTools textColor={textColor} setTextColor={setTextColor}  finalFont={finalFont} setFinalFont={setFinalFont} finalFontSize={finalFontSize} setFinalFontSize={setFinalFontSize}/>}

        {tool === "Dimesion-Tools" && <DimensionTools />}
        {tool === "Shapes-Tools" && <ShapesTools />}
        <OtherTools />
      </div>
    </div>
  );
};

export default Editor;
