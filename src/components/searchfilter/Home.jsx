import { useEffect, useState } from "react";
import Portrait from "./helper/Portrait";
import {
  Landscape1,
  Portrait1,
  Filter,
  Sort,
} from "../DoItYourSelf/Image/header/pic";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getCategoryTemplates,
} from "../../reduxStore/actions/filterAction";

const Home = ({ setName, loadPageData, templates, setTemplates }) => {
  const dispatch = useDispatch();
  let filter = useSelector((state) => state.projects.filter);
  const [ativeFilter, setActiveFilter] = useState("");
  let category = filter.category;
  const categoryTemplates = filter.categoryTemplates;
  const [categroyId, setCategoryId] = useState();
  const filterPortrait = () => {
    
    const filterData = templates.filter((item) => {
      return item.mode === "potrait";
    });
    setTemplates(filterData);
    setActiveFilter("portrait");
  };
  const filterLandscape = () => {};

  // console.log("jkdsfjkgsdfgjdfgjk categroy", category, categoryTemplates);
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <div className="div-home-container">
      <div className="diy-home-mid">
        <p className="heading">Categories We Offer</p>
        <div className="categories">
          {category.map((ele) => {
            return (
              <div
                className="category"
                onClick={() => {
                  dispatch(getCategoryTemplates({ categoryid: ele._id }));
                  setName(ele.categoryName);
                }}
              >
                <img src={ele.categoryLogo} alt="" />
                <p className="caption">{ele.categoryName}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="diy-home-btm">
        <div className="btm-header">
          <p className="heading">All Categories</p>
          <div className="icon-container">
            <div className={ativeFilter === "portrait" ? "activeFill" : ""}>
              <img src={Portrait1} alt="portrait" onClick={filterPortrait} />
            </div>
            <div className={ativeFilter === "landscape" ? "activeFill" : ""}>
              <img src={Landscape1} alt="landscape" onClick={filterLandscape} />
            </div>
            <div className={ativeFilter === "filter" ? "activeFill" : ""}>
              <img src={Filter} alt="filter" />
            </div>
            <div className={ativeFilter === "sort" ? "activeFill" : ""}>
              <img src={Sort} alt="sort" />
            </div>
          </div>
        </div>
        <div className="portrait-box ">
          {templates.map((ele) => {
            return (
              <Portrait
                id={ele._id}
                img={ele.templateImage}
                loadPageData={loadPageData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
