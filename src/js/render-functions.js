// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { refs } from "./refs";

export const lightbox = new SimpleLightbox('.gallery-item a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    spinner: true,
  });

export function renderGalleryMarkup(array) {
    const markUp = array.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
    <li class = "gallery-item">
    
    <a class="gallery-link" href="${largeImageURL}">
    <div class="img-container">
            <img 
                class="gallery-img" 
                src="${webformatURL}" 
                alt="${tags}" 
                />
                </div>
        </a>
       
        <div class="numbers-group">
                 <span class="group">
        <p class="numbers">Likes</p>
        <p class="number">${likes}</p>
                </span>
                    <span class="group">
        <p class="numbers">Views</p>
         <p class="number">${views}</p>
                    </span>
                    <span class="group">
        <p class="numbers">Comments</p>
        <p class="number">${comments}</p>
                    </span>
                    <span class="group">
        <p class="numbers">Downloads</p>
        <p class="number">${downloads}</p>
                    </span>
        </div>
    </li>
    `  ).join('');
    refs.galleryCard.insertAdjacentHTML('beforeend', markUp);
    lightbox.refresh();
    }