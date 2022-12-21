import axios from "axios";

export const getAllLogo =()=>{
  return async dispatch =>{
      const getLogo = async () => {
        
              return await axios
                .post("http://localhost:8000/diy/getLogos")
                .then((res) => res)
                .catch((err) => {
                  // console.log(err);
                  return [];
                });
          };
          const res = await getLogo();
          // console.log(res,"-----------------");
          let logo = res.data.data.logos
          // console.log("logo====", logo);
          dispatch({
            type: "LOGO",
            payload: logo,
          });

      }
  }


export const getAllText =()=>{
  return async dispatch =>{
      const getText = async () => {
        
              return await axios
                .post(`http://localhost:8000/diy/getAllText`)
                .then((res) => res)
                .catch((err) => {
                  // console.log(err);
                  return [];
                });
          };
          const res = await getText();
          // console.log(res,"-----------------");
          let text = res.data.data.texts
          // console.log("text====", text);
          dispatch({
            type: "TEXT",
            payload: text,
          });

      }
  }

export const getCategory =()=>{
    return async dispatch =>{
        const getCat = async () => {
          
                return await axios
                  .get(`http://localhost:8000/diy/diygetcategory`)
                  .then((res) => res)
                  .catch((err) => {
                    // console.log(err);
                    return [];
                  });
            };
            const res = await getCat();
            let category = res.data.data.category
            // console.log("categroy====", category);
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
                        // console.log(err);
                        return [];
                      });
                };
                const res = await getAllTemplates();
                let templates = res.data.data;
                // console.log("categroy templates====", templates);
                dispatch({
                  type: "ALL_TEMPLATES",
                  payload: templates,
                });
    
            }
        }