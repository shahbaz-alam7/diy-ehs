import Navbar from "./components/DoItYourSelf/Commons/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getPageFromTemplate } from "./reduxStore/actions/pageActions";
import Home from "./components/DoItYourSelf/Home";
import Main from "./components/searchfilter/Main";
import Order from "./components/Pages/Order.jsx";
function App() {
  const [diypage, loadPage] = useState(false);
  function loadPageData(templateId) {
    dispatch(getPageFromTemplate({ templateId: templateId }));
    loadPage(true);
  }
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    // <div className="App" style={{backgroundColor:"yellow",width:"400px", height:"400px"}}>
    <div className="App">
      <Navbar />
      {diypage ? <Home /> : <Main loadPageData={loadPageData} />}
      {/* <Order /> */}
    </div>
  );
}

export default App;
