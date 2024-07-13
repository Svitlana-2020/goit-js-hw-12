import{S as p}from"./assets/vendor-10cb7c31.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="44855126-e7e59ad0378cdd72f172648f5";function d(s){return fetch(`https://pixabay.com/api/?key=${m}&q=${s}&image_type="photo"&orientation="horizontal"&safesearch="true"`).then(r=>{if(console.log(r),!r.ok)throw new Error(r.status);return r.json()})}const a={inputQ:document.querySelector(".input"),galleryCard:document.querySelector(".list-class"),searchBtn:document.querySelector(".start-btn"),formForm:document.querySelector(".input-button"),loader:document.querySelector(".loader")},l=new p(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",spinner:!0});function f(s){const r=s.map(({webformatURL:n,largeImageURL:o,tags:e,likes:t,views:i,comments:c,downloads:u})=>`
    <li class = "gallery-item">
    
    <a class="gallery-link" href="${o}">
    <div class="img-container">
            <img 
                class="gallery-img" 
                src="${n}" 
                alt="${e}" 
                />
                </div>
        </a>
       
        <div class="numbers-group">
                 <span class="group">
        <p class="numbers">Likes</p>
        <p class="number">${t}</p>
                </span>
                    <span class="group">
        <p class="numbers">Views</p>
         <p class="number">${i}</p>
                    </span>
                    <span class="group">
        <p class="numbers">Comments</p>
        <p class="number">${c}</p>
                    </span>
                    <span class="group">
        <p class="numbers">Downloads</p>
        <p class="number">${u}</p>
                    </span>
        </div>
    </li>
    `).join("");a.galleryCard.insertAdjacentHTML("beforeend",r),l.refresh()}a.formForm.addEventListener("submit",g);function g(s){s.preventDefault();const r=s.currentTarget,n=r.elements.inputf.value.trim();if(a.galleryCard.innerHTML="",n===""){a.loader.disabled=!0,iziToast.show({message:'"Enter a search query in a search field. Pls try again"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"});return}d(n).then(({hits:o})=>{if(o&&o.length>0)f(o);else return Promise.reject(new Error(""));a.loader.disabled=!0}).catch(h).finally(()=>{r.reset()})}function h(s){a.loader.disabled=!0,iziToast.show({message:'"Sorry, there are no images matching your search query. Please try again!"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"})}l.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
