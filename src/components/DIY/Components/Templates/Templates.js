import React from "react";
import FakeData from "../../FakeData/FakeData";
import ImageTemplate from "./ImageTemplate";
import "./Templates.css";

const Templates = ({ imgData }) => {
  return (
    <div id="scrollDemo" style={{marginRight:"0px"}}>
      <div className="mt-5 pb-2">
        <h4 className="pictograms-h4">Templates</h4>
      </div>
      <div className="image-map-container scrollbar">
        <div className="row mt-4" style={{marginRight:"4px", width:'275px'}}>
          {FakeData.map((img) => (
            <ImageTemplate img={img} imgData={imgData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
