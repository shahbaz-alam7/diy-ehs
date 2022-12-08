import React from "react";
import "./styles/Template.css";
import Template from "../FakeData/data/Templates";
import { useDispatch, useSelector } from "react-redux";
import { getTemplate } from "../../../reduxStore/actions/pageActions";
const TemplateOption = ({ setOpenSlider }) => {
  console.log("🚀 ~ file: TemplateOption.jsx:4 ~ Template", Template)
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data, "inside text");
  const project = useSelector((state) => state.projects);
  const pageIndex = project.currentPage;
  return (
    <div className="template_container">
      <button
        onClick={() => {
          setOpenSlider(false);
        }}
      >
        close
      </button>
      <div>
        {Template.map((ele) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(
                  getTemplate({ templateId: ele.id, pageIndex: pageIndex })
                );
              }}
            >
              {ele.id}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemplateOption;
