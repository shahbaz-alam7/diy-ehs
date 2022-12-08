const pageEmpty={
    template:null,
    svgs:[],
    logos:[],
    texts:[],
    textTemplate:[],
    backgroundColor:"white",
    comment:"",
    notes:"", 
    title:"",
    frame:{
        
        frameNumber:0
    }
}
const initialState = [pageEmpty];

const handlePage = (state = initialState, action) => {
    // console.log(state.cart);
    
    let page =null;
    switch (action.type) {
        case 'CREATE_EMPTY_PAGE':
                       
                        return [...state, pageEmpty];
                    
                     
        case 'EMPTY_PAGE' :
            
            return state.slice(0, action.payload.pageIndex).concat([pageEmpty]).concat(state.slice(action.payload.pageIndex+1));
         case "UPDATE_PAGE":
            return state.slice(0, action.payload.pageIndex).concat([action.payload.pageUpdated]).concat(state.slice(action.payload.pageIndex+1));

        case 'GET_TEMPLATE':
           
        console.log(state,"------");

            page ={...state[action.payload.pageIndex], template:action.payload.template}
            const obj= state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));
           console.log(obj,"=====");
           return obj
        case 'UPDATE_TEMPLATE_COLOR':
                return  state.slice(0, action.payload.pageIndex).concat([action.payload.page]).concat(state.slice(action.payload.pageIndex+1));
        case 'GET_SVGS' :
            page = {
                ...state[action.payload.pageIndex], svgs:[...state[action.payload.pageIndex].svgs, ...action.payload.Svg]
            }
            return  state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));

        case 'GET_LOGOS':
            page =  {
                ...state[action.payload.pageIndex], 
                logos:[...state[action.payload.pageIndex].logos,...action.payload.logo]
            }
            return  state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));

        case 'SET_LOGOS':
            page =   {
                ...state[action.payload.pageIndex], logos:action.payload.logo
            }
            return  state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));

        case 'GET_TEXTS':
            page =  {
                ...state[action.payload.pageIndex], texts:[...state[action.payload.pageIndex].texts ,...action.payload.text]
            }
            return  state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));

        case 'UPDATE_TEXTS':
               page =   {
                    ...state[action.payload.pageIndex], texts:[...action.payload.textArr]
                }
                console.log(page,"#################################");
               // return [...state]
                return  state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));

        case 'GET_TEXT_TEMPLATE':
            page = {
                ...state[action.payload.pageIndex], textTemplate:[...state[action.payload.pageIndex].textTemplate, ...action.payload.textTemplate]
            }
            return  state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));

        default: return state
    }
}
export default handlePage;