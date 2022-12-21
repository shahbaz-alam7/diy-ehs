import React, { useState } from "react";

import { FileDrop } from "react-file-drop";
import "./styles/canvasSize.css";

const UploadFile = ({ setOpenSlider }) => {
  const styles = {
    border: "1px solid black",
    width: "190px",
    color: "black",
    height: "267px",
    border: "0.5px solid #EAEAEA",
    borderRadius: "2px",
  };
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const dropHandler = (files, event) => {
    console.log("onDrop!", files, event);
  };
  return (
    <div className="canvas_size">
      <div className="categories-div-panel">
        <p className="heading">Upload files here</p>
        <button onClick={handleChange}> Select from Device</button>
        <div className="drag-drop">
          <FileDrop onDrop={(files, event) => dropHandler(files, event)}>
            Drag & Drop Image here
          </FileDrop>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
