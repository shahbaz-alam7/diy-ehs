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
import HeaderPage from "./header/HeaderPage";
const Page = ({ addHeader }) => {
  const pageRef = useRef(null);
  const pageContent = useRef([]);

  const data = useSelector((state) => {
    console.log(state,"----------------------");
    return state.projects.pages;
  });
  pageContent.current=data;
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
    background-color:white;
    box-shadow: 0 0 10px gray;
  `;
  const [ActiveIndex, setActiveIndex] = useState("-1");
  // useEffect(() => {
  //   console.log(headerIndex);
  // }, [headerIndex]);

  
  const toolsAvailable={image:"Image-Tools", text:"Font-Tools", canvas:"Dimesion-Tools",shapes:"Shapes-Tools"}
              // tool={"Font-Tools"}
              // tool={"Dimesion-Tools"}
              // tool={"Shapes-Tools"}
              data.forEach(element => {
                element.logos.reverse();
              });
              
  const [activeTool, setActiveTool] =useState(toolsAvailable.canvas);            
  return (
    <>
     {console.log("refreshing")}
      <div className='Page_main_container' ref={pageRef}>
       {/* <div className="frame-viewer" ref={pageRef}>
        <div id="frame-div">
          <div
            id="frame"
            style={{
              clipPath: frames[data.frame.frameNumber],
            }}
          >  */}
          {data.map((page, pageIndex)=>{
            return <div
            onMouseDown={(event) => {
              event.stopPropagation();
              console.log(":hello mouse is down in main page")
              let str = "Dimesion-Tools"
              setActiveTool(str);
              setActiveIndex(`${pageIndex}`);
            }}
            >
              {activeTool==="Dimesion-Tools"?(
              <HeaderPage
                index={pageIndex}
                ele={page}
                refValue={pageRef}
                tool={activeTool}
              />
             ) : null}
            <Container>
              
              {page.logos.map((ele, index) => {
              
                return (
                  <ImageComponent index={index} ele={ele} 
                    key={ele.index} 
                     activeTool={activeTool}
                    setActiveTool={setActiveTool}
                    toolsAvailable={toolsAvailable} 
                    setActiveIndex={setActiveIndex}
                    ActiveIndex={ActiveIndex}
                    />
                );
              })}

              {page.texts.map((ele, index) => {
                return (
                  <Text
                    setText={setText}
                    index={index}
                    ele={ele}
                    color={color}
                    key={ele.text}
                    activeTool={activeTool}
                    setActiveTool={setActiveTool}
                    toolsAvailable={toolsAvailable}
                    setActiveIndex={setActiveIndex}
                    ActiveIndex={ActiveIndex}
                    pageContent={pageContent}
                    pageIndex={pageIndex}
                  />
                  
                );
              })}
              
            </Container>
            </div>
            })}
          {/* </div>
        </div>
      </div> */}
      </div>
      <Download pageRef={pageRef} />
    </>
  );
};

export default Page;