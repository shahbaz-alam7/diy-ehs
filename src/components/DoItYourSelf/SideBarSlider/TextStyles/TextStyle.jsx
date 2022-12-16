import React from "react";
import "./TextStyle.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getText,
  getTextTemplate,
} from "../../../../reduxStore/actions/pageActions";
import {getAllText} from "../../../../reduxStore/actions/filterAction"
import TextTemplate from "../../FakeData/data/TextTemplate";
import { useEffect } from "react";
const TextStyle = ({ setOpenSlider, setAddHeader }) => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllText());
  },[])
  let texts =data.projects.filter.text;
  console.log(texts, "inside text");
  const project = useSelector((state) => state.projects);
  const pageIndex = project.currentPage;
  return (
    <div className="text_container">
      <button
        onClick={() => {
          setOpenSlider(false);
        }}
      >
        close
      </button>
      <button
        onClick={() => {
          setAddHeader(true);
        }}
      >
        Add Text Box
      </button>
      <button
        onClick={() => {
          dispatch(getText({ TextId: 1901, pageIndex: pageIndex }));
        }}
      >
        Add Heading
      </button>
      <button>Add a subheading</button>
      <button>Add a little bit of body text</button>

      <div>
        {texts.map((ele) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(
                  getTextTemplate({
                    textTemplateId: ele.id,
                    pageIndex: pageIndex,
                  })
                );
              }}
            >
              <p style={{width:"100%",fontSize:"18px", height:"50px", family:`${ele.family}` , }}><i>{ele.text}</i></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TextStyle;
