
let initialState ={
    category:[],
    categoryTemplates:[],
    text:[]   ,
    logo:[]
}

const handlePage = (state = initialState, action) => {
    
    switch (action.type) {
        case 'CATEGORY':
            return {...state, category:[...action.payload]};
        case 'CATEGORY_TEMPALTES':
            // console.log(action.payload);
            return {...state, categoryTemplates:action.payload.templates}
        case 'ALL_TEMPLATES'://console.log(action.payload);
        return {...state, categoryTemplates:action.payload}
        case 'TEXT' :
            return {...state, text:action.payload};
        case 'LOGO' :
            return {...state, logo:action.payload};
        default: return {...state};

    }
}

export default handlePage;