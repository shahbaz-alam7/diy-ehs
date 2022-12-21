import React, { useState, useEffect } from "react";
import Home from "./Home";
import Items from "./Items";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getCategoryTemplates,
} from "../../reduxStore/actions/filterAction";

const Main = ({ loadPageData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryTemplates());
    dispatch(getCategory());
  }, []);
  
  let filter = useSelector((state) => state.projects.filter);
  const [name, setName] = useState("");
  const [templates, setTemplates] = useState(filter.categoryTemplates);
  useEffect(() => {
    setTemplates(filter.categoryTemplates)
  }, [filter]);
  console.log(" Main.js templates", templates);
  return (
    <div>
      <div className="diy-home-top">
        <div className="content">
          <div className="inputBox">
            <SearchIcon id="icon-diy" />
            <input type="text" placeholder="Search for a category" />
          </div>
          <div className="diy-btn">
            <span>Create New</span>
          </div>
        </div>
      </div>
      {name ? (
        <Items itemName={name} setName={setName} loadPageData={loadPageData} />
      ) : (
        <Home
          setName={setName}
          loadPageData={loadPageData}
          templates={templates}
          setTemplates={setTemplates}
        />
      )}
    </div>
  );
};

export default Main;
