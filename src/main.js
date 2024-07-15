// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { getPictureByQuery, params } from "./js/pixabay-api";
import { lightbox, renderGalleryMarkup } from "./js/render-functions";
import { refs } from "./js/refs";


refs.formForm.addEventListener('submit', handleSearch);
refs.loadMoreBtn.addEventListener('click', loadMore);

           async function handleSearch(e) {
                        e.preventDefault();
                        const form = e.currentTarget;
                        params.q = form.elements.inputf.value.trim();
                        refs.galleryCard.innerHTML = '';
                        refs.loader.classList.remove('hidden');
                        refs.loadMoreBtn.classList.add('hidden');
                        params.page = 1;
                        if (params.q === "") {
                            {
                                
                                iziToast.show({
                                    message: '"Enter a search query in a search field. Pls try again"',
                                    messageColor: 'white',
                                    messageLineHeight: '150%',
                                    backgroundColor: '#ef4040',
                                    position: 'topRight'
                                            })
                                    }
                                    return;
                        }
                        
                        try {
                            const dataResponse = await getPictureByQuery(params);
                            const { hits, totalHits } = dataResponse;
                            console.log(hits, totalHits);
                            params.maxPage = Math.floor(totalHits / params.per_page);
                            console.log(params.maxPage);
                            
                            if (hits && hits.length > 0) {
                                renderGalleryMarkup(hits);
                                refs.loadMoreBtn.classList.remove('hidden');
                                
                            } else {
                                throw new Error('No images found');
                            }
                        } catch (error) {;
                            fetchError(error);
                        } finally {
                            refs.loader.classList.add('hidden');
                            form.reset(); // Сброс формы даже в случае ошибки
                        }
                    }

                    function fetchError(error) {
                        iziToast.show({
                            message: '"Sorry, there are no images matching your search query. Please try again!"',
                            messageColor: 'white',
                            messageLineHeight: '150%',
                            backgroundColor: '#ef4040',
                            position: 'topRight'
                                    })
                            }


async function loadMore() {
    params.page += 1;
    refs.loader.classList.remove('hidden');

    try {
        const dataResponse = await getPictureByQuery(params);
        const { hits } = dataResponse;
        console.log(hits);
        
        if (hits && hits.length > 0) {
            renderGalleryMarkup(hits);
            refs.loadMoreBtn.classList.remove('hidden');
        } else {
            throw new Error('No images found');
        }
    } catch (error) {;
        fetchError(error);
    }
    finally {
        refs.loader.classList.add('hidden');
        if (params.maxPage === params.page){
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results.",
                messageColor: 'white',
                messageLineHeight: '150%',
                backgroundColor: '#ef4040',
                position: 'topRight'
                        })

        }
        refs.loadMoreBtn.classList.add('hidden');
        // form.reset(); // Сброс формы даже в случае ошибки
    }
}

