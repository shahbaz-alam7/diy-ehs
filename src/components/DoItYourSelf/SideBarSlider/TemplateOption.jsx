import React from "react";
import "./styles/Template.css";
import { useDispatch, useSelector } from "react-redux";
import { getTemplate } from "../../../reduxStore/actions/pageActions";
import { useEffect } from "react";
import {
  getCategoryTemplates,
  getCategory,
} from "../../../reduxStore/actions/filterAction";

const TemplateOption = ({ setOpenSlider }) => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.projects.filter);
  const categoryTemplates = filter.categoryTemplates;
  let category = filter.category;

  useEffect(() => {
    dispatch(getCategoryTemplates({ categoryid: "9879878" }));
    dispatch(getCategory());
  }, []);

  console.log(data, "inside text");
  // const project = useSelector((state) => state.projects);
  // const templateData = project.commons.templates;
  console.log(
    "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
    categoryTemplates,
    filter
  );

  // const pageIndex = project.currentPage;
  return (
    <div className="template_container">
      <div className="categories-div-panel">
        <p className="heading">Categories</p>
        {category.map((item) => {
          return (
            <div className="category">
              <p>{item.categoryName}</p>
            </div>
          );
        })}
      </div>
      <div className="recent-designs">
        <p className="heading">Recent Design</p>
        <div className="designs"></div>
        <div className="designs"></div>
        <div className="designs"></div>
      </div>
      <div className="all-categories categories-div-panel">
        <p className="heading">All Categories</p>

        {categoryTemplates.map((ele) => {
          return (
            <div className="designs">
              <img
                src={ele.templateImage}
                alt="alter"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default TemplateOption;
