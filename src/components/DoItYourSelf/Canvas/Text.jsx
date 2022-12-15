import React, { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setText } from "../../../reduxStore/actions/pageActions";
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
  ({ setHeaderIndex, index, ele, color, headerIndex }) => {
    const TextObject = useRef(ele);
    let dispatch = useDispatch();
    const [ref, setRefVal] = useState(null);
    useEffect(() => {
      console.log(TextObject.current);
    }, []);
    const captureText = (props, index) => {
      console.log(props, "---------------");
      dispatch(setText({ props, index: index, pageIndex: 0 }));
    };
    function onResize(event, direction, ref, delta, index) {
      const { width, height } = ref.style;
      TextObject.current.width = width;
      TextObject.current.height = height;
      console.log(TextObject);
      //captureText({width, height}, index);
    }

    function onDragStop(e, d, index) {
      const { x, y } = d;
      TextObject.current.x = x;
      TextObject.current.y = y;
      console.log(TextObject);
      //captureText({x,y}, index);
    }
    return (
      TextObject && (
        <>
          {headerIndex === index ? (
            <HeaderPage
              setHeaderIndex={setHeaderIndex}
              index={index}
              ele={ele}
              headerIndex={headerIndex}
              refValue={ref}
              // tool={"Image-Tools"}
              tool={"Font-Tools"}
              // tool={"Dimesion-Tools"}
              // tool={"Shapes-Tools"}
            />
          ) : null}
          <StyledRnd
            className="d-flex"
            default={{ x: ele.x, y: ele.y }}
            bounds="parent"
            onDragStop={(e, d) => onDragStop(e, d, index)}
            onResize={(event, direction, ref, delta, index) =>
              onResize(event, direction, ref, delta, index)
            }
            onMouseDown={(event) => {
              event.stopPropagation();
              setHeaderIndex(index);
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
  ({ info, setRefVal, backgroundColor, index, selectedCol, TextObject }) => {
    const ref = useRef(null);
    let weight = info.isBold ? 900 : 500;
    let style = info.isItalic ? "italic" : "normal";
    let textdecoration = info.underline ? "underline" : "none";

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
      height: 100px;
      width: 350px;
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
      console.log(ref);
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
