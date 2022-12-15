import {getCategory} from "../actions/filterAction";
import {getCategoryTemplates} from "../actions/filterAction";
let initialState ={
    category:[],
    categoryTemplates:[]
}

const handlePage = (state = initialState, action) => {
    
    switch (action.type) {
        case 'CATEGORY':
            let category= getCategory();
            return {...state, category:category};
        case 'CATEGORY_TEMPALTES':
            console.log(action.payload);
            let categoryTemplates = getCategoryTemplates(action.payload.categoryid);
            return {...state, categoryTemplates:categoryTemplates}
        default: return {...state};

    }
}

export default handlePage;