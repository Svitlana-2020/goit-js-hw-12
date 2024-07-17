import{a as d,S as y,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f="44855126-e7e59ad0378cdd72f172648f5",n={key:f,q:"",page:1,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true",maxPage:0};d.defaults.baseURL="https://pixabay.com/api/";async function u(i){return await d.get("",{params:n}).then(({data:a})=>a)}const r={inputQ:document.querySelector(".input"),galleryCard:document.querySelector(".list-class"),searchBtn:document.querySelector(".start-btn"),formForm:document.querySelector(".input-button"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn"),gallery:document.querySelector(".gallery")},b=new y(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",spinner:!0});function p(i){const s=i.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:l,comments:g,downloads:h})=>`
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
    `).join("");r.galleryCard.insertAdjacentHTML("beforeend",s),b.refresh()}r.formForm.addEventListener("submit",L);r.loadMoreBtn.addEventListener("click",v);async function L(i){i.preventDefault();const s=i.currentTarget;if(n.q=s.elements.inputf.value.trim(),r.loader.classList.remove("hidden"),r.galleryCard.innerHTML="",n.page=1,n.q===""){r.loader.classList.add("hidden"),c.show({message:'"Enter a search query in a search field. Pls try again"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"});return}r.gallery.scrollBy({top:1e3,behavior:"smooth"}),r.loadMoreBtn.classList.add("hidden");try{const a=await u(n),{hits:o}=a;if(console.log(o),o&&o.length>0)p(o),r.loadMoreBtn.classList.remove("hidden");else throw new Error("No images found")}catch{m()}finally{r.loader.classList.add("hidden"),s.reset()}}function m(i){c.show({message:'"Sorry, there are no images matching your search query. Please try again!"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"})}async function v(i){r.loader.classList.remove("hidden"),n.page+=1;try{const s=await u(n),{hits:a,totalHits:o}=s;if(console.log(a,o),n.maxPage=Math.ceil(o/n.per_page),n.maxPage<n.page){r.loader.classList.add("hidden"),r.loadMoreBtn.classList.add("hidden"),c.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"});return}p(a);const l=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:l,behavior:"smooth"}),r.loadMoreBtn.classList.remove("hidden")}catch{m()}finally{r.loader.classList.add("hidden")}}
//# sourceMappingURL=commonHelpers.js.map
