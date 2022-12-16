import axios from "axios";



export const getCategory =()=>{
    return async dispatch =>{
        const getCat = async () => {
          
                return await axios
                  .get(`http://localhost:8000/diy/diygetcategory`)
                  .then((res) => res)
                  .catch((err) => {
                    console.log(err);
                    return [];
                  });
            };
            const res = await getCat();
            let category = res.data.data.category
            console.log("categroy====", category);
            dispatch({
              type: "CATEGORY",
              payload: category,
            });

        }
    }

    export const getCategoryTemplates =(obj)=>{
        return async dispatch =>{
            const getAllTemplates = async () => {
              
                    return await axios
                      .post(`http://localhost:8000/diy/getTemplatesByCategory`,{
                        categroyId:"63996efd78fd5f71f85385a1"
                      })
                      .then((res) => res)
                      .catch((err) => {
                        console.log(err);
                        return [];
                      });
                };
                const res = await getAllTemplates();
                let templates = res.data.data;
                console.log("categroy templates====", templates);
                dispatch({
                  type: "ALL_TEMPLATES",
                  payload: templates,
                });
    
            }
        }