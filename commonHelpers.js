import{a as u,S as f,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const y="44855126-e7e59ad0378cdd72f172648f5",n={key:y,q:"",page:1,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"};u.defaults.baseURL="https://pixabay.com/api/";async function p(i){return await u.get("",{params:n}).then(({data:a})=>a)}const r={inputQ:document.querySelector(".input"),galleryCard:document.querySelector(".list-class"),searchBtn:document.querySelector(".start-btn"),formForm:document.querySelector(".input-button"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn"),gallery:document.querySelector(".gallery")},b=new f(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",spinner:!0});function g(i){const t=i.map(({webformatURL:a,largeImageURL:o,tags:e,likes:s,views:l,comments:d,downloads:h})=>`
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
        <p class="number">${s}</p>
                </span>
                    <span class="group">
        <p class="numbers">Views</p>
         <p class="number">${l}</p>
                    </span>
                    <span class="group">
        <p class="numbers">Comments</p>
        <p class="number">${d}</p>
                    </span>
                    <span class="group">
        <p class="numbers">Downloads</p>
        <p class="number">${h}</p>
                    </span>
        </div>
    </li>
    `).join("");r.galleryCard.insertAdjacentHTML("beforeend",t),b.refresh()}r.formForm.addEventListener("submit",L);r.loadMoreBtn.addEventListener("click",w);async function L(i){i.preventDefault();const t=i.currentTarget;if(n.q=t.elements.inputf.value.trim(),r.loader.classList.remove("hidden"),r.galleryCard.innerHTML="",n.page=1,n.q===""){r.loader.classList.add("hidden"),r.loadMoreBtn.classList.add("hidden"),c.show({message:'"Enter a search query in a search field. Pls try again"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"}),t.reset();return}r.gallery.scrollBy({top:1e3,behavior:"smooth"}),r.loadMoreBtn.classList.add("hidden");try{const a=await p(n),{hits:o,totalHits:e}=a;if(console.log(o,e),o&&o.length>0){if(g(o),Math.ceil(e/n.per_page)===n.page){r.loader.classList.add("hidden"),r.loadMoreBtn.classList.add("hidden"),c.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"});return}r.loadMoreBtn.classList.remove("hidden")}else throw new Error("No images found")}catch{m()}finally{r.loader.classList.add("hidden"),t.reset()}}function m(i){c.show({message:'"Sorry, there are no images matching your search query. Please try again!"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"})}async function w(i){r.loader.classList.remove("hidden"),n.page+=1;try{const t=await p(n),{hits:a,totalHits:o}=t;console.log(a,o),g(a);const l=document.querySelector(".gallery-item").getBoundingClientRect().height*2;if(window.scrollBy({top:l,behavior:"smooth"}),Math.ceil(o/n.per_page)===n.page){r.loader.classList.add("hidden"),r.loadMoreBtn.classList.add("hidden"),c.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"});return}r.loadMoreBtn.classList.remove("hidden")}catch{m()}finally{r.loader.classList.add("hidden")}}
//# sourceMappingURL=commonHelpers.js.map
