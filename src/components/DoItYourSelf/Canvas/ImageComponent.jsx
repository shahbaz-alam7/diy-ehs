import React, { useRef,useEffect , useState} from 'react'
import styled from "styled-components";
import { Rnd } from "react-rnd";
import { useDispatch } from 'react-redux';
import {setLogo,updatePage} from "../../../reduxStore/actions/pageActions";
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
       // console.log(ref);
        setRefVal(ref);
      }
    }, [ref]);
   
    return <Image ref={ref} >{JSON.stringify}</Image>;
}


const ImageComponent = ({pageContent,pageIndex,setActiveIndex,ActiveIndex,ele, index, activeTool,setActiveTool}) => {
  const [ref, setRefVal] = useState(null);
    const dispatch =useDispatch();
    function onResize(event, direction, ref, delta, indexs) {
     // console.log(ref, ref.style, ref.style.width,"aaaaaaaa",ref.style.height, pageContent.current[pageIndex], index,"llll")
        const { width, height,x,y } = ref.style;
        console.log(pageContent.current[pageIndex].logos[index]);
        pageContent.current[pageIndex].logos[index].height=height;
        pageContent.current[pageIndex].logos[index].width=width;
        pageContent.current[pageIndex].logos[index].x=x;
        pageContent.current[pageIndex].logos[index].y=y;
      }
      
      function onDragStop(e, d , indexs) {
        console.log(pageContent.current[pageIndex].logos[index]);
        const { x, y } = d;
        //console.log(d)
       // console.log(x,"----",y)
        pageContent.current[pageIndex].logos[index].x=x;
        pageContent.current[pageIndex].logos[index].y=y;
      }
   
      function getNumber(str){
        console.log(str,"--", typeof str);
        let a = typeof str === "string"? str.split('p'): str;
        if(typeof a === "number" )
        return a;
        let num = Number(a[0]);
        return num
      }
  return (
    <>
    {/* {console.log(activeTool ,index, ActiveIndex)} */}
    {(activeTool==="Image-Tools"  && ActiveIndex==index)?(
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
                //     // console.log(":hello mouse is down")
                //     // showHeader.current=true;
                //     // console.log(showHeader.current);
                    let str = "Image-Tools"
                    setActiveTool(str);
                    setActiveIndex(`${index}`);
                //     //dispatch(updatePage({page:pageContent.current[pageIndex]}))
                 }}
            >
            <ImageComp  img={ele.logoURL} setRefVal={setRefVal}/>
    </StyledRnd>
    
    </>
  )
}

export default ImageComponent