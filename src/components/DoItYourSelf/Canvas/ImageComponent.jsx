import React, { useRef } from 'react'
import styled from "styled-components";
import { Rnd } from "react-rnd";
import { useDispatch } from 'react-redux';
import {setLogo} from "../../../reduxStore/actions/pageActions";
const StyledRnd = styled(Rnd)`
&:hover {
  border: 1px solid blue;
}
&:hover .show {
  visibility: visible;
}
`;


function ImageComp ({img,zindex}){
    const Image = styled.div`
      width: 100%;
      height: 100%;
      background-image: url(${img});
      background-size: 100% 100%;
      position:absolute;
      z-index:zindex
    `;
    return <Image>{JSON.stringify}</Image>;
}


const ImageComponent = ({ele, index}) => {
    const dispatch =useDispatch();
    const ImageElement = useRef(ele);
    const captureImage =()=>{
        console.log(ImageElement.current);
         dispatch(setLogo({propObject:ImageElement.current, index, pageIndex:0}));
      }
    function onResize(event, direction, ref, delta, index) {
        const { width, height } = ref.style;
        ImageElement.current.width=width;
        ImageElement.current.height=height;
        captureImage();
      }
      
      function onDragStop(e, d , index) {
        const { x, y } = d;
        ImageElement.current.x=x;
        ImageElement.current.y=y;
        captureImage();
      }
      let zindex =100;
  return (
    <>
      <StyledRnd
                className="d-flex"
                default={{  x: ele.x,
                    y: ele.y,
                    width:ele.width,
                    height: ele.height}}
                onResize={onResize}
                onDragStop={onDragStop}
                lockAspectRatio={true}
                key={ele.id}
            >
            <ImageComp  img={ele.logoURL} zindex={zindex-index} />
    </StyledRnd>
    </>
  )
}

export default ImageComponent