import{S as u}from"./assets/vendor-10cb7c31.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p="44855126-e7e59ad0378cdd72f172648f5";function m(s){return fetch(`https://pixabay.com/api/?key=${p}&q=${s}&image_type="photo"&orientation="horizontal"&safesearch="true"`).then(r=>{if(console.log(r),!r.ok)throw new Error(r.status);return r.json()})}const n={inputQ:document.querySelector(".input"),galleryCard:document.querySelector(".list-class"),searchBtn:document.querySelector(".start-btn"),formForm:document.querySelector(".input-button"),loader:document.querySelector(".loader")},d=new u(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",spinner:!0});function f(s){const r=s.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:i,comments:l,downloads:c})=>`
    <li class = "gallery-item">
    
    <a class="gallery-link" href="${o}">
    <div class="img-container">
            <img 
                class="gallery-img" 
                src="${a}" 
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
        <p class="number">${l}</p>
                    </span>
                    <span class="group">
        <p class="numbers">Downloads</p>
        <p class="number">${c}</p>
                    </span>
        </div>
    </li>
    `).join("");n.galleryCard.insertAdjacentHTML("beforeend",r),d.refresh()}n.formForm.addEventListener("submit",g);function g(s){s.preventDefault();const r=s.currentTarget,a=r.elements.inputf.value.trim();if(n.loader.style.display="block",n.galleryCard.innerHTML="",a===""){n.loader.style.display="none",iziToast.show({message:'"Enter a search query in a search field. Pls try again"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"});return}m(a).then(({hits:o})=>{if(o&&o.length>0)f(o);else return Promise.reject(new Error(""));n.loader.style.display="none"}).catch(y).finally(()=>{r.reset()})}function y(s){n.loader.style.display="none",iziToast.show({message:'"Sorry, there are no images matching your search query. Please try again!"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
