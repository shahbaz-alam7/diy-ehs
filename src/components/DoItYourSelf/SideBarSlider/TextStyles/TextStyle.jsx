import React from 'react'
import "./TextStyle.css"
import {useDispatch, useSelector } from 'react-redux'
import {getText,getTextTemplate} from "../../../../reduxStore/actions/pageActions";
import TextTemplate from '../../FakeData/data/TextTemplate';
const TextStyle = ({setOpenSlider,setAddHeader}) => {
  const data= useSelector(state=>state);
  const dispatch = useDispatch();
  console.log(data,"inside text");
  const project = useSelector(state=>state.projects);
  const pageIndex = project.currentPage;
  return (
    <div className='text_container'>
      <button onClick={()=>{setOpenSlider(false)}}>close</button>
      <button onClick={()=>{setAddHeader(true)}}>Add Text Box</button>
      <button onClick={()=>{dispatch(getText({TextId:1901,pageIndex:pageIndex}))}}>Add Heading</button>
      <button>Add a subheading</button>
      <button>Add a little bit of body text</button>
      
      <div>
        {TextTemplate.map(ele=>{
          return  <div style={{cursor:"pointer"}} onClick={()=>{dispatch(getTextTemplate({textTemplateId:ele.id,pageIndex:pageIndex}))}}>
                      {ele.id}
                  </div>
        })}

      </div>
    </div>
  )
}

export default TextStyle
