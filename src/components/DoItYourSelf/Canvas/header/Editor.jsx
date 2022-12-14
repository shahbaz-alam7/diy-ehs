import React, { useState } from "react";
import "../styles/editor.css";

import {
  CgUndo,
  CgRedo,
  CgArrowsExpandRight,
  BiUndo,
  BiRedo,
  BiDownload,
  IoMdDocument,
  IoCrop,
  IoDocumentsOutline,
  GrDocument,
  TiDocumentAdd,
  RiDeleteBinLine,
  MdIosShare,
  MdPreview,
  FiAlignCenter,
  BsCircle,
  BsTriangle,
  BsStar,
  BsSquare,
  squareBorder,
  octagonBorder,
  circularBorder,
  strokeLines,
} from "./icons";
import FontSize from "./helper/FontSize";
import FontWeight from "./helper/FontWeight";
import FontComponent from "./helper/FontFamily";
import Icon from "./helper/Icon";
import ColorPalette from "./ColorPalette";
const Editor = () => {
  // const [activeToolBar] = useState("Tools");
  // const [activeToolBar] = useState("Font-Tools");
  // const [activeToolBar] = useState("Dimesion-Tools");
  const [activeToolBar] = useState("Shapes-Tools");
  return (
    <div className="editor">
      <div className="editor-child">
        <UndoRedo />
        {activeToolBar === "Tools" && <Tools />}
        {activeToolBar === "Font-Tools" && <FontTool />}
        {activeToolBar === "Dimesion-Tools" && <DimesionTools />}
        {activeToolBar === "Shapes-Tools" && <ShapesTool />}

        <OtherTools />
      </div>
    </div>
  );
};

export default Editor;

const Tools = () => {
  return (
    <div className="tools flex">
      <Icon icon={<IoCrop className="icon" />} desc="Crop" left="-5px" />
      <Icon icon={<CgArrowsExpandRight className="icon" />} desc="Expand" />
      <Icon icon={<CgUndo className="icon" />} desc="Redo" />
      <Icon icon={<CgRedo className="icon" />} desc="Redo" />
      <Icon icon={<GrDocument className="icon" />} desc="Portrait" />
      <Icon icon={<GrDocument className="icon landscape" />} desc="Landscape" />
    </div>
  );
};
const OtherTools = () => {
  return (
    <div className="other-tools flex">
      <Icon icon={<TiDocumentAdd className="icon" />} desc="Copy" left="-5px" />
      <Icon icon={<IoDocumentsOutline className="icon" />} desc="Add_Page" />
      <Icon icon={<RiDeleteBinLine className="icon" />} desc="Delete" />
      <Icon icon={<MdPreview className="icon" />} desc="Preview" />
      <Icon icon={<BiDownload className="icon" />} desc="Download" />
      <Icon icon={<MdIosShare className="icon" />} desc="Share" />
    </div>
  );
};
const UndoRedo = () => {
  return (
    <div className="back-forward flex">
      <Icon icon={<BiUndo className="icon" />} desc="Back" left="0" />
      <Icon icon={<BiRedo className="icon" />} desc="Forward" />
    </div>
  );
};

const DimesionTools = () => {
  const style = {
    paddingTop: "8px",
    marginRight: "-10px",
    marginLeft: "10px",
  };
  return (
    <div className="d-tools flex">
      <select name="dimension" id="">
        <option value="7 x 14 in">7 x 14 in</option>
        <option value="10 x 14 in">10 x 14 in</option>
        <option value="14 x 7 in">14 x 7 in</option>
        <option value="7 x 14 in">7 x 14 in</option>
      </select>
      <h4 style={style}>W</h4>
      <select name="width" id="">
        <option value="7 in">7 in</option>
        <option value="10 in">10 in</option>
        <option value="14 in">14 in</option>
        <option value="20 in">20 in</option>
      </select>
      <h4 style={style}>H</h4>
      <select name="width" id="">
        <option value="7 in">7 in</option>
        <option value="10 in">10 in</option>
        <option value="14 in">14 in</option>
        <option value="20 in">20 in</option>
      </select>
      <select name="unit" id="">
        <option value="in">in</option>
        <option value="cm">cm</option>
        <option value="ft">ft</option>
        <option value="m">m</option>
      </select>
      <Icon icon={<GrDocument className="icon" />} />
      <Icon icon={<GrDocument className="icon landscape" />} />
    </div>
  );
};

const FontTool = () => {
  const [finalFont, setFinalFont] = useState("Open Sans");
  return (
    <div className="Font-Tools flex">
      <FontComponent finalFont={finalFont} setFinalFont={setFinalFont} />
      <FontWeight />
      <FontSize />
      <ColorPalette />
      <div className="hex-code">
        <p>#000</p>
      </div>
      <Icon icon={<FiAlignCenter className="icon" />} />
    </div>
  );
};
const ShapesTool = () => {
  return (
    <>
      <div className="shape-tools Font-tools  flex">
        <Icon icon={<BsCircle className="icon" />} />
        <Icon icon={<BsTriangle className="icon" />} />
        <Icon icon={<BsStar className="icon" />} />
        <Icon icon={<BsSquare className="icon" />} />
        <FontSize />
        <ColorPalette />
        <div className="hex-code">
          <p>#000</p>
        </div>
        <img src={strokeLines} alt="" style={{ marginLeft: "10px" }} />
        <FontSize />
        <ColorPalette />
        <div className="hex-code">
          <p>#000</p>
        </div>
        <figure>
          <img src={squareBorder} alt="" />
        </figure>
        <figure>
          <img src={octagonBorder} alt="" />
        </figure>
        <figure>
          <img src={circularBorder} alt="" />
        </figure>
      </div>
    </>
  );
};
