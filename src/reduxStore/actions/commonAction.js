import Template from "../../components/DoItYourSelf/FakeData/data/Templates";
import Logos from "../../components/DoItYourSelf/FakeData/data/Logos";
import Svgs from "../../components/DoItYourSelf/FakeData/data/Svgs";
import Text from "../../components/DoItYourSelf/FakeData/data/Text";
import TextTemplate from "../../components/DoItYourSelf/FakeData/data/TextTemplate";
import store from "../store";
import frames from "../../components/DoItYourSelf/FakeData/data/framesShape";


export const getTemplateDataByID =(templateid)=>{
    let templateData =null;
    Template.forEach(ele=>{
        if(ele.id===templateid){
        const obj ={
            id:ele.id,
            images:[],
            texts:[],
            TextTemplate:[],
            svgs:[],
            backgroundColor:ele.backgroundColor}

            ele.images.forEach(logoid=>{
                Logos.find(logoele=>{
                    if(logoele.id===logoid){
                        obj.images.push(logoele);
                    }
                    return null;
                })
            })

            ele.texts.forEach(textid=>{
                Text.find(textele=>{
                    if(textele.id===textid){
                        obj.texts.push(textele);
                    }
                    return null;
                })
            })

            templateData=obj;
        }
    })            
    return templateData;

}

export const getTemplateData =()=>{
        let templateData =[];
        Template.forEach(ele=>{
            const obj ={
                id:ele.id,
                images:[],
                texts:[],
                TextTemplate:[],
                svgs:[],
                backgroundColor:ele.backgroundColor}

                ele.images.forEach(logoid=>{
                    Logos.find(logoele=>{
                        if(logoele.id===logoid){
                            obj.images.push(logoele);
                        }
                        return null;
                    })
                })

                ele.texts.forEach(textid=>{
                    Text.find(textele=>{
                        if(textele.id===textid){
                            obj.texts.push(textele);
                        }
                        return null;
                    })
                })

                templateData.push(obj);
        })            
        return templateData;

}

export const uploadLogo = (url,pageId) => async (dispatch)=>  {
    // console.log(user)
    let img = {
        logoURL:url,
        // pageId:"639c615fa1e9f717f4b75073",
        pageId:pageId,
        operationType:1,
        createdByUser:true
    }
    // const myuser = JSON.parse(localStorage.getItem('myuser'))
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMyMDI1NWM2MWE3NTM3NGNjZGI3OTkiLCJSb2xlIjoidXNlciIsImlhdCI6MTY3MTEyMTAyMywiZXhwIjoxNjc0NzIxMDIzfQ.xNl3muAOJC1Jn8h6ngkAEq9uz00hJz7vaQljabIlByA"
    // console.log("asdasda", myuser)
        const response = await fetch(`http://localhost:8000/diy/diyUploadImg`, {
          method: "POST",
          body: JSON.stringify(img),
          headers: { "Content-Type": "application/json",
          "x-access-token": `${token}`
       },
        });
        
        if(response.status===200){
          const data = await response.json();
          console.log(data.data)
        //   dispatch({
        //     type: "UPLOAD_LOGO",
        //     payload: data.data
        //   })
        }
  }