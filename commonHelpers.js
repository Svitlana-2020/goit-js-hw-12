import{a as d,S as f,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y="44855126-e7e59ad0378cdd72f172648f5",o={key:y,q:"",page:1,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true",maxPage:0};d.defaults.baseURL="https://pixabay.com/api/";async function u(i){return await d.get("",{params:o}).then(({data:a})=>a)}const t={inputQ:document.querySelector(".input"),galleryCard:document.querySelector(".list-class"),searchBtn:document.querySelector(".start-btn"),formForm:document.querySelector(".input-button"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},b=new f(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",spinner:!0});function p(i){const s=i.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:l,comments:g,downloads:h})=>`
    <li class = "gallery-item">
    
    <a class="gallery-link" href="${n}">
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
        <p class="number">${r}</p>
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
    `).join("");t.galleryCard.insertAdjacentHTML("beforeend",s),b.refresh()}t.formForm.addEventListener("submit",L);t.loadMoreBtn.addEventListener("click",w);async function L(i){i.preventDefault();const s=i.currentTarget;if(o.q=s.elements.inputf.value.trim(),t.loader.classList.remove("hidden"),t.galleryCard.innerHTML="",o.page=1,o.q===""){t.loader.classList.add("hidden"),c.show({message:'"Enter a search query in a search field. Pls try again"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"});return}t.loadMoreBtn.classList.add("hidden");try{const a=await u(o),{hits:n,totalHits:e}=a;if(console.log(n,e),o.maxPage=Math.floor(e/o.per_page),console.log(o.maxPage),n&&n.length>0)p(n),t.loadMoreBtn.classList.remove("hidden");else throw new Error("No images found")}catch{m()}finally{t.loader.classList.add("hidden"),s.reset()}}function m(i){c.show({message:'"Sorry, there are no images matching your search query. Please try again!"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"})}async function w(i){if(o.maxPage===o.page){t.loader.classList.add("hidden"),c.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"});return}t.loader.classList.remove("hidden"),o.page+=1;try{const s=await u(o),{hits:a}=s;console.log(a),p(a);const r=document.querySelector(".gallery-item").getBoundingClientRect().height*4;window.scrollBy({top:r,behavior:"smooth"}),t.loadMoreBtn.classList.remove("hidden")}catch{m()}finally{t.loader.classList.add("hidden")}}
//# sourceMappingURL=commonHelpers.js.map
