import{i as a}from"./assets/vendor-17o45ynk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="https://pixabay.com/api/",l="46224221-307a76b395d66c959be951e41";function f(n){const r=new URLSearchParams({key:l,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${r}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{const i=o.hits;return i.length===0?(a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[]):i}).catch(o=>(a.error({title:"Error",message:"Illegal operation",position:"topRight"}),[]))}const c=document.querySelector(".js-search-form");document.querySelector(".gallery");c.addEventListener("submit",m);function m(n){n.preventDefault();const r=c.elements.searchInput.value.trim();if(r===""){a.warning({message:"Please fill in the field",position:"topRight"});return}f(r),c.reset()}
//# sourceMappingURL=index.js.map
