(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".slides-list"),t=document.querySelectorAll(".slide"),i=document.getElementById("prev"),n=document.getElementById("next");let e=0;const r=t.length,l=()=>{s.style.transform=`translateX(-${e*100}%)`},o=()=>{i.disabled=e===0,n.disabled=e===r-1},g=()=>{e<r-1&&(e++,l(),o())},y=()=>{e>0&&(e--,l(),o())};n.addEventListener("click",g),i.addEventListener("click",y),o()});const v="/smart-orange/img/svg/sprite.svg",h=s=>s.map(t=>`
    <li class="objects-item">
    <div class="icon-container">
    <svg class="icon-prev" width="34" height="34">
    <use xlink:href="${v}#icon-pin"></use>
    </svg>
    </div>
    <div class="container-year-type">
    <p class="year">${t.year}p.</p>
    <p class="type">${t.type}</p>
    </div>
    <div class="img-title-container">
    <img class="card-img" src="${t.img}" alt="${t.name}" >
    <h3 class="title-card">${t.name}</h3>
    </div>
    <p class="adress">${t.adress}</p>
    <p class="types-work">Теги:</p>
    <ul class="list-tags">
    ${t.tags.map(i=>`<li class="item-tags">${i}</li>`).join("")}
    </ul>
    </li>
    `).join(""),f=document.querySelector(".objects-list"),c=document.querySelector(".load-more"),m=document.querySelectorAll(".filter-btn ");let a=[],d="all",u=1;const L=3;async function $(){try{a=await(await fetch("https://test.smarto.agency/smarto_complexes_list.json")).json(),p()}catch(s){f.innerHTML=`<li style="color:red;">Помилка: ${s.message}</li>`}}function S(){return d==="all"?a:a.filter(s=>s.type===d)}function p(){const s=S(),t=u*L,i=s.slice(0,t),n=h(i);f.innerHTML=n,i.length>=s.length?(c.style.display="none",iziToast.info({title:"Готово",message:"Усі об`єкти завантажені",position:"topRight"})):c.style.display="block"}m.forEach(s=>{s.addEventListener("click",()=>{m.forEach(t=>t.classList.remove("active")),s.classList.add("active"),d=s.dataset.filter,u=1,p()})});c.addEventListener("click",()=>{u++,p()});$();
//# sourceMappingURL=index.js.map
