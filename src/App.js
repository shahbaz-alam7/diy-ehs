import Navbar from "./components/DoItYourSelf/Commons/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import {
  getCategory,
  getPageFromTemplate,
} from "./reduxStore/actions/pageActions";
import Home from "./components/DoItYourSelf/Home";
import Main from "./components/searchfilter/Main";
import Order from "./components/Pages/Order.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const dispatch = useDispatch();
  const [diypage, loadPage] = useState(false);

  function loadPageData(templateId) {
    dispatch(getPageFromTemplate({ templateId: templateId }));
    loadPage(true);
  }
  useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/diy"
            element={diypage ? <Home /> : <Main loadPageData={loadPageData} />}
          />
          <Route path="/orderdiy" element={<Order />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
