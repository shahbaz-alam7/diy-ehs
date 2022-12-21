import React, { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setText,updatePage } from "../../../reduxStore/actions/pageActions";
import HeaderPage from "./header/HeaderPage";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";

import TextareaAutosize from "react-textarea-autosize";
import { setRef } from "@mui/material";
const StyledRnd = styled(Rnd)`
  &:hover {
    border: 1px solid blue;
  }
  &:hover .show {
    visibility: visible;
  }
`;
const TextDisplayer = React.forwardRef(
  ({ ActiveIndex,setActiveIndex, index, ele, color, activeTool,setActiveTool,pageContent,pageIndex}) => {
    // console.log(activeTool,"SDsddddddddddddddd");
    const showHeader =useRef(false);
    const TextObject = useRef(ele);
    let dispatch = useDispatch();
    const [ref, setRefVal] = useState(null);
    useEffect(() => {
      // console.log(TextObject.current);
    }, []);
    // const captureText = (props, index) => {
    //   // console.log(props, "---------------");
    //   dispatch(setText({ props, index: index, pageIndex: 0 }));
    // };
    function onResize(event, direction, ref, delta, indexs) {
      const { width, height, x,y} = ref.style;
      pageContent.current[pageIndex].texts[index].height=height;
        pageContent.current[pageIndex].texts[index].width=width;
        pageContent.current[pageIndex].texts[index].x=x;
      pageContent.current[pageIndex].texts[index].y=y;
    }

    function onDragStop(e, d, indexs) {
      const { x, y } = d;
      pageContent.current[pageIndex].texts[index].x=x;
      pageContent.current[pageIndex].texts[index].y=y;
     
    }
    function getNumber(str){
      console.log(str,"--", typeof str);
        let a = typeof str === "string"? str.split('p'):str
        if(typeof a === "number" )
        return a;
        let num = Number(a[0]);
      return num
    }
    return (
      TextObject && (
        // <>{console.log(activeTool,ActiveIndex,index,"****************")}
          <>{(activeTool==="Font-Tools"  && ActiveIndex==index)?(
            <HeaderPage
              index={index}
              ele={ele}
              refValue={ref}
              tool={activeTool}
              pageContent={pageContent}
              pageIndex={pageIndex}
            />
           ) : null}
          <StyledRnd
            className="d-flex"
            default={{ x: getNumber(ele.x), y: getNumber(ele.y) }}
            bounds="parent"
            onResize={onResize}
            onDragStop={onDragStop}
          

            onMouseDown={(event) => {
              event.stopPropagation();
              // console.log(pageContent.current)
              
              // console.log(":hello mouse is down")
              // showHeader.current=true;
              // console.log(showHeader.current);
              let str = "Font-Tools"
              setActiveTool(str);
              setActiveIndex(`${index}`);
              // dispatch(updatePage({page:pageContent.current[pageIndex]}))
            }}
            
            key={ele.id}
          >
            <TextComponent
              setRefVal={setRefVal}
              TextObject={TextObject}
              index={index}
              info={TextObject.current}
              backgroundColor={color}
            />
          </StyledRnd>
        </>
      )
    );
  }
);
const TextComponent = React.forwardRef(
  ({setShowHeader, info, setRefVal, backgroundColor, index, selectedCol, TextObject }) => {
    const ref = useRef(null);
    

   
    let weight = info.isBold ? 900 : 500;
    let style = info.isItalic ? "italic" : "normal";
    let textdecoration = info.underline ? "underline" : "none";
    let width ="200px";
    const TextField = styled.div`
      font-family: ${info.family};
      font-size: ${info.fontSize};
      font-weight: ${weight};
      font-style: ${style};
      color: ${info.color};
      background-color: rgba(${backgroundColor}, 1);
      letter-spacing: ${info.letterSpacing};
      /* line-height: ${info.lineSpacing}; */
      /* line-height: 10px; */
      text-decoration: ${textdecoration};
      width${width},      
      &:hover {
        /* background-color: rgba(${backgroundColor}, 0.1); */
      }
    `;

    useEffect(() => {
      if (!(ref === null)) {
        setRefVal(ref);
      }
    }, [ref]);
    function handleChange(event) {
      // console.log(ref);
    }

    return (
      <div contenteditable="true">
        <TextField onChange={handleChange} ref={ref}>
          {info.text}
        </TextField>
      </div>
    );
  }
);
export default TextDisplayer;
