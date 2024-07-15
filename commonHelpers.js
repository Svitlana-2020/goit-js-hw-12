import{a as d,S as h,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const y="44855126-e7e59ad0378cdd72f172648f5",t={key:y,q:"",page:1,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true",maxPage:0};d.defaults.baseURL="https://pixabay.com/api/";async function u(a){return await d.get("",{params:t}).then(({data:i})=>i)}const o={inputQ:document.querySelector(".input"),galleryCard:document.querySelector(".list-class"),searchBtn:document.querySelector(".start-btn"),formForm:document.querySelector(".input-button"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},b=new h(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",spinner:!0});function p(a){const r=a.map(({webformatURL:i,largeImageURL:n,tags:e,likes:s,views:l,comments:g,downloads:f})=>`
    <li class = "gallery-item">
    
    <a class="gallery-link" href="${n}">
    <div class="img-container">
            <img 
                class="gallery-img" 
                src="${i}" 
                alt="${e}" 
                />
                </div>
        </a>
       
        <div class="numbers-group">
                 <span class="group">
        <p class="numbers">Likes</p>
        <p class="number">${s}</p>
                </span>
                    <span class="group">
        <p class="numbers">Views</p>
         <p class="number">${l}</p>
                    </span>
                    <span class="group">
        <p class="numbers">Comments</p>
        <p class="number">${g}</p>
                    </span>
                    <span class="group">
        <p class="numbers">Downloads</p>
        <p class="number">${f}</p>
                    </span>
        </div>
    </li>
    `).join("");o.galleryCard.insertAdjacentHTML("beforeend",r),b.refresh()}o.formForm.addEventListener("submit",L);o.loadMoreBtn.addEventListener("click",w);async function L(a){a.preventDefault();const r=a.currentTarget;if(t.q=r.elements.inputf.value.trim(),o.galleryCard.innerHTML="",o.loader.classList.remove("hidden"),o.loadMoreBtn.classList.add("hidden"),t.page=1,t.q===""){c.show({message:'"Enter a search query in a search field. Pls try again"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"});return}try{const i=await u(t),{hits:n,totalHits:e}=i;if(console.log(n,e),t.maxPage=Math.floor(e/t.per_page),console.log(t.maxPage),n&&n.length>0)p(n),o.loadMoreBtn.classList.remove("hidden");else throw new Error("No images found")}catch{m()}finally{o.loader.classList.add("hidden"),r.reset()}}function m(a){c.show({message:'"Sorry, there are no images matching your search query. Please try again!"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"})}async function w(){t.page+=1,o.loader.classList.remove("hidden");try{const a=await u(t),{hits:r}=a;if(console.log(r),r&&r.length>0)p(r),o.loadMoreBtn.classList.remove("hidden");else throw new Error("No images found")}catch{m()}finally{o.loader.classList.add("hidden"),t.maxPage===t.page&&c.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"}),o.loadMoreBtn.classList.add("hidden")}}
//# sourceMappingURL=commonHelpers.js.map
