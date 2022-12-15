import React, { useState } from "react";

import {
  CgUndo,
  CgRedo,
  CgArrowsExpandRight,
  IoCrop,
  GrDocument,
} from "../icons";
import Icon from "../helper/Icon";
const ImageTools = () => {
  return (
    <>
      <div className="tools flex">
        <Icon icon={<IoCrop className="icon" />} desc="Crop" left="-5px" />
        <Icon icon={<CgArrowsExpandRight className="icon" />} desc="Expand" />
        <Icon icon={<CgUndo className="icon" />} desc="Redo" />
        <Icon icon={<CgRedo className="icon" />} desc="Redo" />
        <Icon icon={<GrDocument className="icon" />} desc="Portrait" />
        <Icon
          icon={<GrDocument className="icon landscape-pic" />}
          desc="Landscape"
        />
      </div>
    </>
  );
};

export default ImageTools;
