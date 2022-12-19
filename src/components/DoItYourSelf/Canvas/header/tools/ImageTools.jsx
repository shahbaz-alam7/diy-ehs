import React, { useState } from "react";

import {
  crop,
  expand,
  Landscape,
  Portrait,
  rLeft,
  rRight,
} from "../../../Image/header/pic";
import Icon from "../helper/Icon";
const ImageTools = () => {
  return (
    <>
      <div className="tools flex">
        <Icon img={crop} desc="Crop" left="-5px" />
        <Icon img={expand} desc="Expand" />
        <Icon img={rLeft} desc="Redo" />
        <Icon img={rRight} desc="Redo" />
        <Icon img={Portrait} desc="Portrait" />
        <Icon img={Landscape} desc="Landscape" />
      </div>
    </>
  );
};

export default ImageTools;
