// export {default as Page} from "./Page";
// export {default as Comments} from "./Comments";
// export {default as Frame} from "./Frame";
// export {default as FullScreen} from "./FullScreen";
// export {default as MainContainer} from "./MainContainer";
// export {default as Download} from "./Download";
// export {default as Notes} from "./Notes";
// export {default as ColorPalette} from "./header/ColorPalette";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./reduxStore/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
