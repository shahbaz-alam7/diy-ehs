import React, { useRef, useState } from "react";
import { CompactPicker } from "react-color";
import { useDispatch } from "react-redux";
import CircleIcon from "@mui/icons-material/Circle";
const ColorPalette = ({textColor,setTextColor, index, actionType, isTemplateColor, currentColor }) => {
  const dispatch = useDispatch();
  const [newColor, setNewColor] = useState(currentColor);
  const [showColorBox, setShowColorBox] = useState(false);
  const captureText = (props, index) => {
    setTextColor(props.color);
    // setNewColor(props.color);
    // if (isTemplateColor) {
    //   dispatch(actionType({ backgroundColor: props.color, pageIndex: 0 }));
    // } else dispatch(actionType({ props, index, pageIndex: 0 }));
  };
  return (
    <div
      style={{
        // border: "1px solid black",
        fontSize: "22px",
        width: "36px",
        height: "22px",
        marginLeft: "14px",
      }}
    >
      <div
        style={{ color: `${textColor}` }}
        onClick={() => {
          setShowColorBox(showColorBox ? false : true);
        }}
      >
        <CircleIcon />
      </div>
      {showColorBox ? (
        <div style={{ position: "absolute" }}>
          <CompactPicker
            onChange={(updateTextColor) => {
              // console.log(updateTextColor.rgb, "====");
              let color = `rgb(${updateTextColor.rgb.r},${updateTextColor.rgb.g},${updateTextColor.rgb.b},${updateTextColor.rgb.a})`;

              // console.log(color);
              captureText({ color: color }, index);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPalette;

/*
import React, { useState } from "react";
import { CompactPicker, CirclePicker } from "react-color";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const ColorPicker = ({ setFinalColor }) => {
  const [colors, setColors] = useState("#00E0FF");

  const [showPicker, setShowPicker] = useState(false);

  const onClick = () => {
    setShowPicker(!showPicker);
  };

  const onClose = () => {
    setShowPicker(false);
  };

  const onChange = (color) => {
    setColors(color.hex);
    setFinalColor(color.hex);
  };
  return (
    <div>
      <div className="color" onClick={onClick}>
        <div style={{ background: `${colors}` }} className="circle" />
        {showPicker ? (
          <IoIosArrowUp size={30} color={"#003459"} />
        ) : (
          <IoIosArrowDown size={30} color={"#003459"} />
        )}
      </div>
      {showPicker ? (
        <div className="popover">
          <div className="cover" onClick={onClose} />
          <CirclePicker color={colors} onChange={onChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
*/
