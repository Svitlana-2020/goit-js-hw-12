import axios from 'axios';

const apiKey = '44855126-e7e59ad0378cdd72f172648f5';
export const params = {
        key: apiKey,
        q: "",
        page: 1,
        per_page: 15,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        maxPage: 0,
    }

axios.defaults.baseURL = "https://pixabay.com/api/";

        export async function getPictureByQuery(query) {
                const response = await axios.get("", { params })
                .then (({data}) => data);
                // console.log(response);
                return response;
      }
       
                            // if (!response.ok) {
                            //     throw new Error (response.status);
                            // }
                            // console.log(response);
                            // return await response.json();
                            //     }

                            // (`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type="photo"&orientation="horizontal"&safesearch="true"`)
                              
    
