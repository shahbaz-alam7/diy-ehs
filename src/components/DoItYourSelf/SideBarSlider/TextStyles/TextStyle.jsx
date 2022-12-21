import React from "react";
import "./TextStyle.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getText,
  getTextTemplate,
} from "../../../../reduxStore/actions/pageActions";
import { getAllText } from "../../../../reduxStore/actions/filterAction";
import TextTemplate from "../../FakeData/data/TextTemplate";
import { useEffect } from "react";

const TextStyle = ({ setOpenSlider, setAddHeader }) => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllText());
  }, []);
  let texts = data.projects.filter.text;
  // console.log(texts, "inside text");
  const project = useSelector((state) => state.projects);
  const pageIndex = project.currentPage;
  return (
    <div className="text_container">
      <div className="btn_div">
        <p>Upload files here</p>
        <button
          style={{ background: "#1f9fb0" }}
          onClick={() => {
            setAddHeader(true);
          }}
        >
          Add a text box
        </button>
        <button
          style={{ fontSize: "16px", fontWeight: "700" }}
          onClick={() => {
            dispatch(getText({ TextId: 1901, pageIndex: pageIndex }));
          }}
        >
          Add a heading
        </button>
        <button style={{ fontSize: "14px", fontWeight: "400" }}>
          Add a sub-heading
        </button>
        <button style={{ fontSize: "10px", fontWeight: "700" }}>
          Add body text(Bold)
        </button>
        <button style={{ fontSize: "10px", fontWeight: "400" }}>
          Add body text
        </button>
      </div>
      <p className="heading">Text Styles</p>
      <div className="font-designs">
        {texts.map((ele) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(
                  getTextTemplate({
                    text:ele,
                    pageIndex: pageIndex,
                  })
                );
              }}
            >
              <p
                style={{
                  fontFamily: `${ele.family}`,
                }}
              >
                <i>{ele.text}</i>
                {/* hello */}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TextStyle;
