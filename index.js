import{a as d,S as u,i as c}from"./assets/vendor-BSTwZ_tR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="52913188-dddfb770e3e7ce37c62d4d4c9",p="https://pixabay.com/api/";async function m(a){const s={key:f,q:a.trim(),image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40},{data:t}=await d.get(p,{params:s});return t}const y=document.getElementById("gallery"),n=document.getElementById("loader"),g=new u(".gallery a",{captionsData:"alt",captionDelay:200});function h(a){const s=document.getElementById("gallery"),t=a.map(o=>`
      <li class="card">
        <a href="${o.largeImageURL}">
          <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
        </a>
        <div class="meta">
          <span>❤️ ${o.likes}</span>
          <span>👁️ ${o.views}</span>
          <span>💬 ${o.comments}</span>
          <span>⬇️ ${o.downloads}</span>
        </div>
      </li>
    `).join("");s.insertAdjacentHTML("beforeend",t),g.refresh()}function L(){y.innerHTML=""}function b(){n.classList.add("is-active"),n.setAttribute("aria-hidden","false")}function v(){n.classList.remove("is-active"),n.setAttribute("aria-hidden","true")}const l=document.querySelector(".form"),w=l.elements["search-text"];l.addEventListener("submit",R);async function R(a){a.preventDefault();const s=w.value.trim();if(L(),!s){c.warning({title:"Упс!",message:"Введіть пошукове слово.",position:"topRight"});return}b();try{const t=await m(s);if(!t.hits||t.hits.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits)}catch(t){c.error({title:"Помилка",message:`Не вдалося завантажити зображення: ${t.message}`,position:"topRight"})}finally{v()}}
//# sourceMappingURL=index.js.map
