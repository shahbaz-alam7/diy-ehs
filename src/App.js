import { useState } from "react";
import "./App.css";
import Home from "./components/DoItYourSelf/Home";
import Order from "./components/Pages/Order";
import Main from "./components/searchfilter/Main";
import Navbar from "./components/DoItYourSelf/Commons/Navbar";
function App() {
  return (
    // <div className="App" style={{backgroundColor:"yellow",width:"400px", height:"400px"}}>
    <div className="App">
      <Navbar />
      <Home />
      {/* <Main/> */}
      {/* <Order /> */}
    </div>
  );
}

export default App;
