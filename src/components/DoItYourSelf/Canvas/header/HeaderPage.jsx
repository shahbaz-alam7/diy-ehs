import React, { useEffect, useState } from "react";
import ColorPalette from "./ColorPalette";
import FontPickerComp from "./FontPicker";
import "./../styles/font.css";
import FontSize from "./FontSize";
// import RangePicker from "./fontComponents/RangePicker";
import { useDispatch } from "react-redux";
import { setText } from "../../../../reduxStore/actions/pageActions";

// tools
import Editor from "./Editor";
import "../styles/editor.css";
const HeaderPage = React.forwardRef(({ index, ele, refValue, tool }) => {
  console.log("ref value", refValue, index);
  const dispatch = useDispatch();

  const [finalFont, setFinalFont] = useState(ele.family||12);
  let initialFont="roboto";
  if( tool==="Font-Tools"){
   initialFont = Number(ele.fontSize.slice(0, ele.fontSize.length - 2));
  }
  const [finalFontSize, setFinalFontSize] = useState(initialFont);
  console.log(finalFont, finalFontSize);
  console.log(refValue, "=-- -- ", index, "=====", tool);
  if (refValue !== null && tool==="Font-Tools") {
    refValue.current.style.fontSize = `${finalFontSize}px`;
    console.log(finalFont);
    refValue.current.style.fontFamily = `${finalFont}`;
  }
  const captureText = (props, index) => {
    dispatch(setText({ props, index, pageIndex: 0 }));
  };
  useEffect(() => {
    return () => {
      if( tool==="Font-Tools"){
      console.log("how many times i run");
      let props = {
        family: finalFont,
        fontsize: finalFontSize,
      };
    }
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
      <Editor tool={tool} finalFont={finalFont} setFinalFont={setFinalFont} finalFontSize={finalFontSize} setFinalFontSize={setFinalFontSize}/>
      {/* <FontSize
        finalFontSize={finalFontSize}
        setFinalFontSize={setFinalFontSize}
      />
       <FontPickerComp finalFont={finalFont} setFinalFont={setFinalFont} />
      <ColorPalette
        index={index}
        actionType={setText}
        isTemplateColor={false}
        currentColor={ele.color}
      /> */}
    </div>
  );
});

export default HeaderPage;
