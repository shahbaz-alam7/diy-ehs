import { combineReducers } from "redux";
import handleDIY from "./rootDIY";
const rootReducer = combineReducers({
    projects: handleDIY 
})

export default rootReducer