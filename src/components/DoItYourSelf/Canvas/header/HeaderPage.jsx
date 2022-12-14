import React, { useEffect, useState } from "react";
import ColorPalette from "./ColorPalette";
import FontPickerComp from "./FontPicker";
import "./../styles/font.css";
import FontSize from "./FontSize";
// import RangePicker from "./fontComponents/RangePicker";
import { useDispatch } from "react-redux";
import { setText } from "../../../../reduxStore/actions/pageActions";
const HeaderPage = React.forwardRef(({ index, ele, refValue }) => {
  const dispatch = useDispatch();
  const [finalFont, setFinalFont] = useState(ele.family);
  let initialFont = Number(ele.fontSize.slice(0, ele.fontSize.length - 2));
  const [finalFontSize, setFinalFontSize] = useState(initialFont);
  console.log(finalFont, finalFontSize);
  console.log(refValue, "=-- -- ", index);
  if (refValue !== null) {
    refValue.current.style.fontSize = `${finalFontSize}px`;
    console.log(finalFont);
    refValue.current.style.fontFamily = `${finalFont}`;
  }
  const captureText = (props, index) => {
    dispatch(setText({ props, index, pageIndex: 0 }));
  };
  useEffect(() => {
    return () => {
      console.log("how many times i run");
      let props = {
        family: finalFont,
        fontsize: finalFontSize,
      };
      // dispatch(setText({props, index, pageIndex:0}));
    };
  }, []);

  return (
    <div
    className="header-page"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <FontSize
        finalFontSize={finalFontSize}
        setFinalFontSize={setFinalFontSize}
      />
      <FontPickerComp finalFont={finalFont} setFinalFont={setFinalFont} />
      <ColorPalette
        index={index}
        actionType={setText}
        isTemplateColor={false}
        currentColor={ele.color}
      />
    </div>
  );
});

export default HeaderPage;
