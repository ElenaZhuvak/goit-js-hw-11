import{i as s,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const f="https://pixabay.com/api/",m="46224221-307a76b395d66c959be951e41";function p(n){const o=new URLSearchParams({key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const r=e.hits;return r.length===0?(s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[]):r}).catch(e=>(s.error({title:"Error",message:"Illegal operation",position:"topRight"}),[]))}function h(n){const o=document.querySelector(".gallery");o.innerHTML="";const e=n.map(r=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
                <img 
                    class="gallery-image" 
                    src="${r.webformatURL}" 
                    alt="${r.tags}" 
                    loading="lazy"
                />
                <div class="image-info">
                    <p class="info-item"><b>Likes:</b> ${r.likes}</p>
                    <p class="info-item"><b>Views:</b> ${r.views}</p>
                    <p class="info-item"><b>Comments:</b> ${r.comments}</p>
                    <p class="info-item"><b>Downloads:</b> ${r.downloads}</p>
                </div>
            </a>
        </li>
    `).join("");o.insertAdjacentHTML("beforeend",e)}let l;const c=document.querySelector(".js-search-form"),g=document.querySelector(".gallery");c.addEventListener("submit",d);function d(n){n.preventDefault();const o=c.elements.searchInput.value.trim();if(o===""){s.warning({message:"Please fill in the field",position:"topRight"});return}g.innerHTML="",p(o).then(e=>{e.length>0&&(h(e),y())}).catch(e=>{console.error(e),s.error({title:"Error",message:"An error occurred while fetching images. Please try again",position:"topRight"})}),c.reset()}function y(){l?l.refresh():l=new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=index.js.map
