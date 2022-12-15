import Category from "../../components/DoItYourSelf/FakeData/data/category"
import Templates from "../../components/DoItYourSelf/FakeData/data/Templates"
import Logos from "../../components/DoItYourSelf/FakeData/data/Logos";
import Text from "../../components/DoItYourSelf/FakeData/data/Text";
export const getCategory =()=>{
    return Category;
}

export const getCategoryTemplates =(categoryid)=>{
    let categoryTemplates=[];

    categoryTemplates = Templates.filter(ele=>categoryid===ele.categoryid);
    let templateData =[];
    categoryTemplates.forEach(ele=>{
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