import Icon from "../helper/Icon";

import FontSize from "../helper/FontSize";
import ColorPalette from "../ColorPalette";
import {
  BsCircle,
  BsTriangle,
  BsStar,
  BsSquare,
  squareBorder,
  octagonBorder,
  circularBorder,
  strokeLines,
} from "../icons";

const ShapesTools = () => {
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

export default ShapesTools;
