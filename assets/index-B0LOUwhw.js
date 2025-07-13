(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const d={API_BASE_URL:"https://api.openweathermap.org/data/2.5/forecast",API_KEY:"11cdf37009d6cf0b79c8c8a1094ec724"};class h{modal;modalClassActive;openBtn;closeBtn;noScroll;body=document.body;constructor(t,n,s,r,i){this.modalClassActive=r,this.noScroll=i;const o=document.querySelector(t),a=document.querySelector(n),l=document.querySelector(s);if(!o||!a||!l)throw new Error("Modal: один из селекторов не нашёл элемент в DOM");this.modal=o,this.openBtn=a,this.closeBtn=l}init(){this.openBtn.addEventListener("click",()=>this.toggle()),this.closeBtn.addEventListener("click",()=>this.toggle()),this.body.addEventListener("keydown",t=>{(t.code==="Escape"||t.code==="Backspace")&&this.toggle()})}toggle(){this.modal.classList.toggle(this.modalClassActive),this.body.classList.toggle(this.noScroll)}}class v{API_URL;constructor(t){this.API_URL=t}async getData(){const t=await fetch(this.API_URL);return console.log(this.API_URL),await t.json()}}const p=e=>Math.ceil(e);function u(e){const t=new Date(e*1e3),n=t.getHours().toString().padStart(2,"0"),s=t.getMinutes().toString().padStart(2,"0");return`${n}:${s}`}const _=e=>`
   <section class="current">
        <div class="current__heading">
          <div class="current__city">${e.city.name}</div>
          <button class="current__btn">
            <svg
              viewBox="0 0 24 24"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                  fill="#fff"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <div class="current__temp">
          <div class="current__temp-value">${p(e.list[0].main.temp_max)}&deg;C</div>
          <div class="current__temp-icon">
<img src="https://openweathermap.org/img/wn/${e.list[0].weather[0].icon}@2x.png" alt="" />          </div>
        </div>
        <div class="current__weather-description">
          <p>${e.list[0].weather[0].description.charAt(0).toUpperCase()+e.list[0].weather[0].description.slice(1)}</p>
        </div>
         <div class="current__weather-description">
          <p>Восход: ${u(e.city.sunrise)}</p>
        </div>
         <div class="current__weather-description">
          <p>Закат: ${u(e.city.sunset)}</p>
        </div>

        ${e.list[0].main.temp>=40?`<div class="current__weather-description">
          <p>Экстремальная жара - смотри не поджарь очко!</p>
        </div>`:""}
        <div class="current__weather-description">
          Вероятность дождя: ${e.list[0].pop}%
        </div>

        <div class="current__weather-details">
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Ощущается</div>
            <div class="current__weather-detail-value">${p(e.list[0].main.feels_like)}&deg;C</div>
          </div>
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Влажность</div>
            <div class="current__weather-detail-value">${e.list[0].main.humidity}%</div>
          </div>
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Ветер</div>
            <div class="current__weather-detail-value">${e.list[0].wind.speed}</div>
          </div>
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Давление</div>
            <div class="current__weather-detail-value">${e.list[0].main.pressure}мб</div>
          </div>
        </div>
      </section>
      `,w=e=>{document.querySelector("[data-app]")?.insertAdjacentHTML("beforeend",_(e))},c=document.querySelector("[data-app]"),m=e=>{if(!c)return;e.list?.[0]?.sys?.pod==="d"?(console.log("День"),c.insertAdjacentHTML("beforeend",`<svg class="time-indicator" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </svg>`)):(console.log("ночь"),c.insertAdjacentHTML("beforeend",'<svg class="time-indicator" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'))},f=new h("[data-settings-modal]","[data-open-settings-modal]","[data-close-settings-modal]","settings-window--active","no-scroll");f.init();const C=encodeURIComponent("Москва"),y=`${d.API_BASE_URL}?q=${C}&appid=${d.API_KEY}&units=metric&lang=ru`,S=new v(y),g=await S.getData();w(g);m(g);
