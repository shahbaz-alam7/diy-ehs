import { combineReducers } from "redux";
import handlePage from "./handlePage";
import handleConfiguration from "./handleConfiguration"
import handleCommons from "./handleCommons";
import handleFilter from "./handlerFilter";
const handleDIY = combineReducers({
    pages:handlePage,
    currentPage:handleConfiguration,
    commons:handleCommons,
    filter:handleFilter
})


export default handleDIY