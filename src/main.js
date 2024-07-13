import { getPictureByQuery } from "./js/pixabay-api";
import { lightbox, renderGalleryMarkup } from "./js/render-functions";
import { refs } from "./js/refs";


refs.formForm.addEventListener('submit', handleSearch);

            function handleSearch(e) {
                        e.preventDefault();
                        const form = e.currentTarget;
                        const queryValue = form.elements.inputf.value.trim();
                        refs.galleryCard.innerHTML = '';
                        if (queryValue === "") {
                            {
                                refs.loader.disabled = true;
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
                                getPictureByQuery(queryValue)
                                    .then(({ hits }) => {
                                        if (hits && hits.length > 0) {
                                        renderGalleryMarkup(hits);}
                                        else {
                                            return Promise.reject(new Error(''));
                                        }
                                        refs.loader.disabled = true;
                                    })
                                    .catch(fetchError)
                        .finally(() => {
        form.reset(); // скидання форми навіть у випадку помилки
    });
                    }

                    function fetchError(err) {
                        refs.loader.disabled = true;
                        iziToast.show({
                            message: '"Sorry, there are no images matching your search query. Please try again!"',
                            messageColor: 'white',
                            messageLineHeight: '150%',
                            backgroundColor: '#ef4040',
                            position: 'topRight'
                                    })
                            }

lightbox.on('show.simplelightbox', function () {
        });
