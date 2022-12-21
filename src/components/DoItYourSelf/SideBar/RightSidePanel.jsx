import React, { useState, useRef } from "react";
import "./rightPanel.css";
import { BiDownload } from "react-icons/bi";
import { FaRegSave } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Rnd } from "react-rnd";
function ImageComp({ img }) {
  const Image = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${img});
    background-size: 100% 100%;
  `;
  return <Image>{JSON.stringify}</Image>;
}
const Container = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: white;
`;
const StyledRnd = styled(Rnd)`
  &:hover {
    border: 1px solid blue;
  }
  &:hover .show {
    visibility: visible;
  }
`;
const RightSidePanel = () => {
  const dispatch = useDispatch();
  const [menuIcon, setMenuIcon] = useState(false);
  const data = useSelector((state) => {
    return state.projects.pages;
  });
  // console.log(data,"---------------------000000000000000000000000000000000-");

  function getNumber(str) {
    let a = str.split("p");
    let num = Number(a[0]);
    return num;
  }
  return (
    <>
      <div className="right-panel">
        <div className="right_items">
          <div className="right_item">
            {data.map((elePage, i) => {
              return (
                <div
                  style={{ background: "green", padding: "20px" }}
                  className="item"
                  onClick={() => {
                    console.log("---------------------------------");
                    dispatch({ type: "SET_CURRENT_PAGE", payload: i });
                  }}
                >
                  <Container>
                    {elePage.logos.map((ele, index) => {
                      return (
                        <StyledRnd
                          className="d-flex"
                          default={{
                            x: getNumber(ele.x) / 4,
                            y: getNumber(ele.y) / 4,
                            width: getNumber(ele.width) / 4,
                            height: getNumber(ele.height) / 4,
                          }}
                          lockAspectRatio={true}
                          key={ele._id}
                          disableDragging={true}
                          enableResizing={false}
                        >
                          <ImageComp img={ele.logoURL} />
                        </StyledRnd>
                      );
                    })}
                    {elePage.texts.map((info, index) => {
                      // console.log(info)
                      let x = getNumber(info.x);
                      let fontSize = getNumber(info.fontSize);
                      let y = getNumber(info.y);
                      // console.log("x:",x,"y:",y,"fontSize:",fontSize)
                      return (
                        <StyledRnd
                          className="d-flex"
                          default={{
                            x: getNumber(info.x),
                            y: getNumber(info.y),
                          }}
                          bounds="parent"
                          scale={0.25}
                          key={info._id}
                          disableDragging={true}
                          enableResizing={false}
                        >
                          <TextComponent info={info} />
                        </StyledRnd>
                      );
                    })}
                  </Container>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const TextComponent = ({ info }) => {
  let weight = info.isBold ? 900 : 500;
  let style = info.isItalic ? "italic" : "normal";
  let textdecoration = info.underline ? "underline" : "none";
  let width = "200px";
  function getNumber(str) {
    let a = str.split("p");
    let num = Number(a[0]);
    num = num / 4;
    num = num + "px";

    return num;
  }
  const TextField = styled.div`
      font-family: ${info.family};
      font-size: ${getNumber(info.fontSize)};
      font-weight: ${weight};
      font-style: ${style};
      color: ${info.color};
      letter-spacing: ${info.letterSpacing};
      /* line-height: ${info.lineSpacing}; */
      /* line-height: 10px; */
      text-decoration: ${textdecoration};
      width${width},      
      
    `;

  return (
    <div>
      <TextField>{info.text}</TextField>
    </div>
  );
};

export default RightSidePanel;
