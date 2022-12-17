import React, { useRef,useEffect , useState} from 'react'
import styled from "styled-components";
import { Rnd } from "react-rnd";
import { useDispatch } from 'react-redux';
import {setLogo} from "../../../reduxStore/actions/pageActions";
import HeaderPage from './header/HeaderPage';
const StyledRnd = styled(Rnd)`
&:hover {
  border: 1px solid blue;
}
&:hover .show {
  visibility: visible;
}
`;


function ImageComp ({img,setRefVal}){
  let ref =useRef(null);
    const Image = styled.div`
      width: 100%;
      height: 100%;
      background-image: url(${img});
      background-size: 100% 100%;
      
      
    `;
    useEffect(() => {
      if (!(ref === null)) {
        setRefVal(ref);
      }
    }, [ref]);
   
    return <Image ref={ref}>{JSON.stringify}</Image>;
}


const ImageComponent = ({ele, index, activeTool,setActiveTool,toolsAvailable}) => {
  const [ref, setRefVal] = useState(null);
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
        console.log(d)
        ImageElement.current.x=x;
        ImageElement.current.y=y;
        console.log(x,"----",y)
        // captureImage();
      }
   
      function getNumber(str){
        let a = str.split('p')
        let num = Number(a[0]);
        return num
      }
  return (
    <>
    {activeTool==="Image-Tools"?(
            <HeaderPage
              index={index}
              ele={ele}
              refValue={ref}
              tool={activeTool}
            />
           ) : null}
      <StyledRnd
                className="d-flex"
                default={{
                  x: getNumber(ele.x),
                  y: getNumber(ele.y),
                  width: getNumber(ele.width),
                  height:getNumber(ele.height),
                }}
                onResize={onResize}
                onDragStop={onDragStop}
                lockAspectRatio={true}
                key={ele._id}
                onMouseDown={(event) => {
                  event.stopPropagation();
                  setActiveTool(toolsAvailable.image)
                }}
            >
            <ImageComp  img={ele.logoURL} setRefVal={setRefVal}/>
    </StyledRnd>
    
    </>
  )
}

export default ImageComponent