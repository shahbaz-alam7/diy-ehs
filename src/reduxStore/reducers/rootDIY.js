import { combineReducers } from "redux";
import handlePage from "./handlePage";
import handleConfiguration from "./handleConfiguration"
const handleDIY = combineReducers({
    pages:handlePage,
    currentPage:handleConfiguration
})


export default handleDIY