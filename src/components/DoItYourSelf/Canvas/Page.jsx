import React, { useState, useRef, useEffect } from "react";
import "./styles/Page.css";
import "./styles/MainContainer.css";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getTemplate, setText } from "../../../reduxStore/actions/pageActions";
import ImageComponent from "./ImageComponent";
import Text from "./Text";
import Download from "./Download";
import frames from "../FakeData/data/framesShape";
import "../SideBarSlider/styles/frames.css";
const Page = ({ addHeader }) => {
  const pageRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemplate({ templateId: 1201, pageIndex: 0 }));
  }, []);

  const data = useSelector((state) => {
    console.log(state);
    return state.projects.pages[0];
  });
  console.log("my data", data);
  let color = data ? data.backgroundColor : "green";

  const Container = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: white;
  `;
  const [headerIndex, setHeaderIndex] = useState(-1);
  useEffect(() => {
    console.log(headerIndex);
  }, [headerIndex]);

  return (
    <>
      {/* <div className='Page_main_container' ref={pageRef}> */}
       {/* <div className="frame-viewer" ref={pageRef}>
        <div id="frame-div">
          <div
            id="frame"
            style={{
              clipPath: frames[data.frame.frameNumber],
            }}
          >  */}
            <Container>
              {data.logos.map((ele, index) => {
                return (
                  <ImageComponent index={index} ele={ele} key={ele.index} />
                );
              })}

              {data.texts.map((ele, index) => {
                return (
                  <Text
                    setText={setText}
                    index={index}
                    ele={ele}
                    color={color}
                    headerIndex={headerIndex}
                    setHeaderIndex={setHeaderIndex}
                    key={ele.text}
                  />
                );
              })}
            </Container>
          {/* </div>
        </div>
      </div> */}
      {/* </div> */}
      <Download pageRef={pageRef} />
    </>
  );
};

export default Page;