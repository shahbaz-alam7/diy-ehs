import Icon from "../helper/Icon";

import FontSize from "../helper/FontSize";
import ColorPalette from "../ColorPalette";
import {
  octagonBorder,
  circularBorder,
  squareBorder,
  strokeLines,
  square,
  Star,
  circle,
  triangle,
} from "../../../Image/header/pic";
const ShapesTools = () => {
  return (
    <>
      <div className="shape-tools Font-tools  flex">
        <Icon img={circle} />
        <Icon img={triangle} />
        <Icon img={Star} />
        <Icon img={square} />
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

export default ShapesTools;
