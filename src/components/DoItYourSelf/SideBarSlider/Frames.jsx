import React, { useEffect } from "react";
import "./styles/frames.css";
import frames from "../FakeData/data/framesShape";
import { useDispatch } from "react-redux";
import { setFrame } from "../../../reduxStore/actions/pageActions";
const Frames = ({ setOpenSlider }) => {
  return (
    <div className="frames_container">
      hi iam the template
      <button
        onClick={() => {
          setOpenSlider(false);
        }}
      >
        close frame
      </button>
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
