import React from 'react'
import "./styles/Template.css";
import Template from '../FakeData/data/Templates';
import { useDispatch, useSelector } from 'react-redux';
import {getTemplate} from "../../../reduxStore/actions/pageActions";
import { useEffect } from 'react';
import ImageComponent from '../Canvas/ImageComponent';
import Text from "../Canvas/Text";
import styled from 'styled-components';
import { Rnd } from "react-rnd";
const StyledRnd = styled(Rnd)`
&:hover {
  border: 1px solid blue;
}
&:hover .show {
  visibility: visible;
}
`;

const Container = styled.div`
  
  width: 100px;
  height: 100px;
   border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  color:green;
  background-color:pink;
`;
function ImageComp ({img}){
  const Image = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${img});
    background-size: 100% 100%;
    position:relative;
  `;
  return <Image>{JSON.stringify}</Image>;
}
const TemplateOption = ({setOpenSlider}) => {
  
  const data= useSelector(state=>state);
  const dispatch = useDispatch();
  
  useEffect(()=>{
     dispatch({type:"GET_ALL_TEMPLATES"})
  },[]);
 
  console.log(data,"inside text");
  const project = useSelector(state=>state.projects);
  const templateData=project.commons.templates;
  console.log(project, "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL", templateData);

  const pageIndex = project.currentPage;
  return (
    <div className='template_container'>
      <button onClick={()=>{setOpenSlider(false)}}>close</button>
      <div>
        {templateData.map(ele=>{
          return  <div style={{cursor:"pointer",marginLeft:"100px", display:"flex", flexDirection:"column"}} onClick={()=>{dispatch(getTemplate({templateId:ele.id,pageIndex:pageIndex}))}}>
                      <Container>
                      
                        {console.log(ele)}
                      {ele.images.map((ele2, index)=>{
                        return  <StyledRnd
                                    className="d-flex"
                                    default={{  x: ele2.x/4,
                                        y: ele2.y/4,
                                        width:ele2.width/4,
                                        height:ele2.height/4}}
                                    
                                    lockAspectRatio={true}
                                    key={ele2.id}
                                >
                                  <ImageComp  img={ele2.imageUrl} />
                                </StyledRnd>
                        })}
                            
                        </Container>
                  </div>
        })}

      </div>
    </div>
  )
}

export default TemplateOption
