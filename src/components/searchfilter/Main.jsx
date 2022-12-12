import React from "react";
import Home from "./Home";
import Items from "./Items";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
const Main = () => {
  const [name, setName] = React.useState("");
  return (
    <div>
      <div className="diy-home-top">
        <div className="content">
          <div className="inputBox">
            <SearchIcon id="icon-diy" />
            <input type="text" placeholder="Search for a category" />
          </div>
          <div className="diy-btn">
            <AddIcon fontSize="large" id="create-btn" />
            <span>Create New</span>
          </div>
        </div>
      </div>
      {name ? (
        <Items itemName={name} setName={setName} />
      ) : (
        <Home setName={setName} />
      )}
    </div>
  );
};

export default Main;
