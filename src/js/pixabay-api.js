const apiKey = '44855126-e7e59ad0378cdd72f172648f5';

export function getPictureByQuery(query) {
    return fetch (`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type="photo"&orientation="horizontal"&safesearch="true"`)
    .then((res) => {
                    console.log(res);
                        if (!res.ok) {
                            throw new Error (res.status);
                        }
                        return res.json();
                            })}
