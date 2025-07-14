(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();class f{modal;modalClassActive;openBtn;closeBtn;noScroll;body=document.body;constructor(t,s,n,r,i){this.modalClassActive=r,this.noScroll=i;const o=document.querySelector(t),d=document.querySelector(s),c=document.querySelector(n);if(!o||!d||!c)throw new Error("Modal: один из селекторов не нашёл элемент в DOM");this.modal=o,this.openBtn=d,this.closeBtn=c}init(){this.openBtn.addEventListener("click",()=>this.toggle()),this.closeBtn.addEventListener("click",()=>this.toggle()),this.body.addEventListener("keydown",t=>{t.code==="Escape"&&this.toggle()})}toggle(){this.modal.classList.toggle(this.modalClassActive),this.body.classList.toggle(this.noScroll)}}class g{API_URL;constructor(t){this.API_URL=t}async getData(){const t=await fetch(this.API_URL);return console.log(this.API_URL),await t.json()}}function u(e){const t=new Date(e*1e3),s=t.getHours().toString().padStart(2,"0"),n=t.getMinutes().toString().padStart(2,"0");return`${s}:${n}`}const a=e=>Math.ceil(e),v=e=>`
   <div class="hours-forecast-card forecast-card">
            <div>
              <h3 class="hours-forecast-title forecast-card-title">${u(e.dt)}</h3>
              <div class="hours-forecast-card-deg forecast-card-deg">
                ${a(e.main.temp)}&deg;C
              </div>
            </div>
<img src="https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png" alt="" />          </div>
          </div>
  `,m=e=>{const t=document.querySelector("[data-app-render-container]");if(!t)return;t.insertAdjacentHTML("beforeend",`
      <section class="hours-forecast">
        <h2 class="hours-forecast__title title">Погода по часам</h2>
        <div class="forecast-cards" data-hours-forecast-cards></div>
      </section>`);const s=document.querySelector("[data-hours-forecast-cards]");if(s)for(let n=0;n<6;n++)s.insertAdjacentHTML("beforeend",v(e.list[n]))},_=e=>`
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
          <div class="current__temp-value">${a(e.list[0].main.temp_max)}&deg;C</div>
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
          Вероятность дождя: ${a(e.list[0].pop*100)}%
        </div>

        <div class="current__weather-details">
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Ощущается</div>
            <div class="current__weather-detail-value">${a(e.list[0].main.feels_like)}&deg;C</div>
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
      `,w=e=>{document.querySelector("[data-app-render-container]")?.insertAdjacentHTML("beforeend",_(e))},y=e=>`
   <div class="days-forecast-card forecast-card">
            <div>
              <h3 class="days-forecast-title forecast-card-title">${new Date(e.dt*1e3).toLocaleDateString("ru-RU",{weekday:"short"}).toUpperCase()}</h3>
              <div class="days-forecast-card-deg forecast-card-deg">
                ${a(e.main.temp)}&deg;C
              </div>
            </div>
<img src="https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png" alt="" />          </div>
          </div>
  `,C=e=>{const t=document.querySelector("[data-app-render-container]");if(!t)return;t.insertAdjacentHTML("beforeend",`
    <section class="days-forecast">
        <h2 class="days-forecast__title title">Погода по дням</h2>
        <div
          class="days-forecast-cards forecast-cards"
          data-days-forecast-cards
        ></div>
      </section>`);const s=document.querySelector("[data-days-forecast-cards]");if(!s)return;e.list.filter(r=>r.dt_txt.includes("12:00:00")).forEach(r=>{s.insertAdjacentHTML("beforeend",y(r))})},l=document.querySelector("[data-app]"),S=e=>{if(!l)return;e.list?.[0]?.sys?.pod==="d"?l.insertAdjacentHTML("beforeend",`<svg data-time-indicator class="time-indicator" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </svg>`):l.insertAdjacentHTML("beforeend",'<svg data-time-indicator class="time-indicator" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>')},L=function(e){w(e),m(e),C(e),S(e)},p={API_BASE_URL:"https://api.openweathermap.org/data/2.5/forecast",API_ID:void 0,API_KEY:"11cdf37009d6cf0b79c8c8a1094ec724"},M=async e=>{const t=document.querySelector("[data-form-message]"),s=document.querySelector("[data-search-input]"),n=document.querySelector("[data-app-render-container]");if(!s)return;const r=document.querySelector("[data-time-indicator]");if(t.innerHTML="",n.innerHTML="",r?.remove(),e.preventDefault(),s.value.trim().length===0){t.innerHTML="Проверка на дурака пройдена :D";return}const i=s.value.trim();try{const o=`${p.API_BASE_URL}?q=${encodeURIComponent(i)}&appid=${p.API_KEY}&units=metric&lang=ru`,c=await new g(o).getData();L(c)}catch{t.innerHTML="бро тут такая ситуация, хз как тебе объяснить, в общем такого города у нас нет, прошу понять и простить"}},A=()=>{new f("[data-settings-modal]","[data-open-settings-modal]","[data-close-settings-modal]","settings-window--active","no-scroll").init()};A();const h=document.querySelector("[data-search-form]");if(!h)throw new Error("Отсутствуют обязательные элементы на странице");h.addEventListener("submit",M);
