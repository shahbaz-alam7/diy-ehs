import React, { useState } from "react";
import "../styles/editor.css";
// tools
import FontTools from "./tools/FontTools";
import DimensionTools from "./tools/DimensionTools";
import ShapesTools from "./tools/ShapesTools";
import ImageTools from "./tools/ImageTools";
import UndoRedoTool from "./tools/UndoRedoTool";
import OtherTools from "./tools/OtherTools";
const Editor = ({ activeToolBar }) => {
  return (
    <div className="editor">
      <div className="editor-child">
        <UndoRedoTool />
        {activeToolBar === "Image-Tools" && <ImageTools />}
        {activeToolBar === "Font-Tools" && <FontTools />}
        {activeToolBar === "Dimesion-Tools" && <DimensionTools />}
        {activeToolBar === "Shapes-Tools" && <ShapesTools />}
        <OtherTools />
      </div>
    </div>
  );
};

export default Editor;
