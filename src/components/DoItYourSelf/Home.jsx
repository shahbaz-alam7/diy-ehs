import React, { useState } from "react";
import { MainContainer } from "./Canvas";
import SidePanel from "./SideBar/SidePanel";

import "./Home.css";
import RightSidePanel from "./SideBar/RightSidePanel";
import Editor from "./Canvas/header/Editor";
import Navbar from "./Commons/Navbar";
const Home = () => {
  const [openSlider, setOpenSlider] = useState(false);
  const [addHeader, setAddHeader] = useState(false);
  return (
    <div className="main-home">
      <Navbar />
      <Editor />
      <div className="home_container">
        <SidePanel
          openSlider={openSlider}
          setOpenSlider={setOpenSlider}
          setAddHeader={setAddHeader}
        />
        <MainContainer openSlider={openSlider} addHeader={addHeader} />
        <RightSidePanel />
      </div>
    </div>
  );
};
export default Home;
