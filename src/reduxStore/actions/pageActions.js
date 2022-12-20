import Template from "../../components/DoItYourSelf/FakeData/data/Templates";
import Logos from "../../components/DoItYourSelf/FakeData/data/Logos";
import Svgs from "../../components/DoItYourSelf/FakeData/data/Svgs";
import TextTemplate from "../../components/DoItYourSelf/FakeData/data/TextTemplate";
import Text from "../../components/DoItYourSelf/FakeData/data/Text";
import axios from "axios";
import store from "../store";
import frames from "../../components/DoItYourSelf/FakeData/data/framesShape";
import { useState } from "react";


export const updatePage=({page})=>{
    return async dispatch =>{
    console.log(page, "to be updated page ----------------")
    let obj={...page, "operationType":3,pageId:page._id}
    const response = await fetch(`http://localhost:8000/diy/diyaddToPage`, {
                method: "POST",
                body: JSON.stringify(obj),
                headers: { "Content-Type": "application/json",
                "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzVmODAwMDJiYjg5MjJiMjRkMGE3YzciLCJSb2xlIjoidXNlciIsImlhdCI6MTY3MTUyMTM0NiwiZXhwIjoxNjc1MTIxMzQ2fQ.qAZNqayStO5pfktz-nFskDs6d8UkMvcZIasrtGakUYQ"
             },
              });
              const data = await response.json();
              //console.log(data);
              if(data.status===200)
                {console.log(data.data,"ppppppppppppppppppppppppppppppp");
                    let page = [data.data];
                    console.log("?????????????????????page====", page);
                    dispatch({
                        type: "ADD_PAGE",
                        payload: {page:page},
                      });
                }
    }
}

export const getPageFromTemplate=({templateId})=>{
    return async dispatch =>{
            console.log("dfjnsjkdnfjdn===================function page from template")
            let d = {
                template:templateId
            }
            //console.log(d)
            const response = await fetch(`http://localhost:8000/diy/diycreateProject`, {
                method: "POST",
                body: JSON.stringify(d),
                headers: { "Content-Type": "application/json",
                "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzVmODAwMDJiYjg5MjJiMjRkMGE3YzciLCJSb2xlIjoidXNlciIsImlhdCI6MTY3MTE5ODQ5MiwiZXhwIjoxNjc0Nzk4NDkyfQ.3UfDH7xUj2ezGnvAk-LFWHw2FgHoZkUQg1DV2DSb_hw"
             },
              });
              const data = await response.json();
              // //console.log(data);
            
              if(data.status===200)
                {
                    let page = data.data.result[0].pageArray;
                    console.log("==================page====", page,data);
                    dispatch({
                        type: "ADD_PAGE",
                        payload: {page:page},
                      });
                }
            }
    }
export const setFrame =({frameNumber})=>{
    return async dispatch =>{
        let data= store.getState();
        console.log(":current page", data.projects.currentPage);
        let pageUpdated = data.projects.pages[data.projects.currentPage][0];
        console.log(frameNumber,")))))))))))))))0)))))))))))))))))))))");
        pageUpdated.frame.frameNumber=frameNumber;
        dispatch({
            type:"UPDATE_PAGE",
            payload:{pageUpdated, pageIndex:data.projects.currentPage}
        })
    }
}
export const addNewCopyOfPage =({templateId})=> {
    return async (dispatch, getState) =>{
        let data= store.getState();
        console.log(data,"ppage");
        dispatch({
            type:"SET_CURRENT_PAGE",
            payload:data.projects.pages.length
        })

        dispatch(getTemplate({templateId:templateId, pageIndex:data.projects.pages.length}));
    }
}

export const getTemplate =({templateId, pageIndex})=> {
    return async (dispatch, getState) =>{
        
        let state= store.getState();
        
        console.log(state,"after pppage", templateId);
        let template = Template.filter(ele=>ele.id===templateId);
        console.log(template[0],"jksdnfksndkfnkas");
        dispatch({
            type:"EMPTY_PAGE",
            payload:{pageIndex}
        })
        //await (async function (){
            template[0].images.forEach(logoId=>{
                console.log(logoId, "sdfsd");
                dispatch(getLogo({logoId, pageIndex}));
            })
            template[0].svgs.forEach(SvgId=>{
                dispatch(getSvgs({SvgId, pageIndex}));
            })
            template[0].texts.forEach(TextId=>{
                dispatch(getText({TextId, pageIndex}));
            })
            template[0].TextTemplate.forEach(textTemplateId=>{
                dispatch(getTextTemplate({textTemplateId, pageIndex}));
            })
            //})();
       
    dispatch( {
        type: "GET_TEMPLATE",
        payload: {template:template[0], pageIndex:pageIndex}
    });    
    }
}
export const setTemplateColor =({backgroundColor, pageIndex})=>{

    if(pageIndex===undefined){
        pageIndex=0;
    }
    return async (dispatch, getState) =>{
        let data= store.getState();
        
        let page = data.projects.pages[pageIndex][0];
       
        page.backgroundColor=backgroundColor;
        console.log("template", page, backgroundColor); 
        
        dispatch({
            type:"UPDATE_TEMPLATE_COLOR",
            payload:{page, pageIndex}
        })


    }
}
export const getLogo =({logoId, pageIndex})=> {
    return async dispatch =>{
        //await (async function (){ 
            let logo = Logos.filter(ele=>ele.id===logoId);
            dispatch( {
                type: "GET_LOGOS",
                payload: {logo, pageIndex}
            });   
       // })()
    }
}
export const setLogo =({propObject, index, pageIndex}) =>{
    return async dispatch=>{
        let data= store.getState();
        let logo = data.projects.pages[pageIndex][0].logos;
        logo[index]=propObject;
        console.log(logo);
        dispatch ({
            type:"SET_LOGOS",
            payload:{logo, pageIndex}
        })
    }
}
export const getSvgs =({SvgId, pageIndex})=> {
    return async dispatch =>{
       // await (async function (){
            let Svg = Svgs.filter(ele=>ele.id===SvgId);
            dispatch( {
                type: "GET_SVGS",
                payload: {Svg, pageIndex}
            }); 
        //})();   
        }
}

export const setText =({props, index, pageIndex})=>{
    return async (dispatch, getState) =>{
        let data= store.getState();
        
        let textArr = data.projects.pages[pageIndex][0].texts;
        for(const key in props) {
            textArr[index][key] = props[key];
        }
        dispatch({
            type:"ADD_TEXT_STACK",
            payload:{textArr, pageIndex}
        });
        dispatch({
            type:"UPDATE_TEXTS",
            payload:{textArr, pageIndex}
        })


    }
}
export const getText =({TextId, pageIndex})=> {
    return async dispatch =>{
        //await (async function (){

            let text = Text.filter(ele=>ele.id===TextId);
            console.log(text, "found any teext");
            dispatch( {
                type: "GET_TEXTS",
                payload: {text, pageIndex}
            });    
        //})();
    }
}
export const getTextTemplate =({textTemplateId, pageIndex})=> {
    return async dispatch =>{
  //      await (async function (){
            let textTemplate = TextTemplate.filter(ele=>ele.id===textTemplateId);
            console.log(textTemplate);
            textTemplate[0].text.forEach(TextId=>{
                dispatch(getText({TextId, pageIndex}));
            })
            dispatch( {
                type: "GET_TEXT_TEMPLATE",
                payload: {textTemplate, pageIndex}
            });  
//        })();  
    }
}

