import React, { useEffect } from "react";
import "./styles/frames.css";
import frames from "../FakeData/data/framesShape";
import { useDispatch } from "react-redux";
import { setFrame } from "../../../reduxStore/actions/pageActions";
import { IoSearchSharp } from "react-icons/io5";
const Frames = ({ setOpenSlider }) => {
  return (
    <div className="frames_container">
      <div className="categories-div-panel">
        <p className="heading">Styles</p>

        <div className="category">
          <p>Circle</p>
        </div>
        <div className="category">
          <p>Triangle</p>
        </div>
        <div className="category">
          <p>Square</p>
        </div>
        <div className="category">
          <p>Polygon</p>
        </div>
        <div className="category">
          <p>Lines</p>
        </div>
        <div className="category">
          <p>Arrows</p>
        </div>
      </div>

      <FramesOption />
    </div>
  );
};

export default Frames;

const FramesOption = () => {
  const [frameIndex, setFrameIndex] = React.useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(frameIndex, "000000000000000000");
    dispatch(setFrame({ frameNumber: frameIndex }));
  }, [frameIndex]);
  return (
    <div className="frame-container">
      <div className="frames">
        {frames.map((item, i) => {
          return (
            <div
              className="frame-item"
              style={{ clipPath: item }}
              onClick={() => {
                setFrameIndex(i);
                console.log("000000000000000000i", i);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
