import{a as d,S as f,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="44855126-e7e59ad0378cdd72f172648f5",o={key:y,q:"",page:1,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true",maxPage:0};d.defaults.baseURL="https://pixabay.com/api/";async function u(a){return await d.get("",{params:o}).then(({data:i})=>i)}const s={inputQ:document.querySelector(".input"),galleryCard:document.querySelector(".list-class"),searchBtn:document.querySelector(".start-btn"),formForm:document.querySelector(".input-button"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},b=new f(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",spinner:!0});function p(a){const r=a.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:l,comments:g,downloads:h})=>`
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
        <p class="number">${t}</p>
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
        <p class="number">${h}</p>
                    </span>
        </div>
    </li>
    `).join("");s.galleryCard.insertAdjacentHTML("beforeend",r),b.refresh()}s.formForm.addEventListener("submit",L);s.loadMoreBtn.addEventListener("click",w);async function L(a){a.preventDefault();const r=a.currentTarget;if(o.q=r.elements.inputf.value.trim(),s.loader.classList.remove("hidden"),s.galleryCard.innerHTML="",o.page=1,o.q===""){s.loader.classList.add("hidden"),c.show({message:'"Enter a search query in a search field. Pls try again"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"});return}s.loadMoreBtn.classList.add("hidden");try{const i=await u(o),{hits:n,totalHits:e}=i;if(console.log(n,e),o.maxPage=Math.floor(e/o.per_page),console.log(o.maxPage),n&&n.length>0)p(n),s.loadMoreBtn.classList.remove("hidden");else throw new Error("No images found")}catch{m()}finally{s.loader.classList.add("hidden"),r.reset()}}function m(a){c.show({message:'"Sorry, there are no images matching your search query. Please try again!"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"})}async function w(){if(o.maxPage===o.page){s.loader.classList.add("hidden"),c.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"});return}s.loader.classList.remove("hidden"),o.page+=1;try{const a=await u(o),{hits:r}=a;if(console.log(r),r&&r.length>0){p(r),s.loadMoreBtn.classList.remove("hidden");const e=document.querySelector(".gallery-item").getBoundingClientRect().height*4;window.scrollBy({top:e,behavior:"smooth"})}else throw new Error("No images found")}catch{m()}finally{s.loader.classList.add("hidden")}}
//# sourceMappingURL=commonHelpers.js.map
