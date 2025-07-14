(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();class y{modal;modalClassActive;openBtn;closeBtn;noScroll;body=document.body;constructor(t,r,o,s,n){this.modalClassActive=s,this.noScroll=n;const c=document.querySelector(t),l=document.querySelector(r),h=document.querySelector(o);if(!c||!l||!h)throw new Error("Modal: один из селекторов не нашёл элемент в DOM");this.modal=c,this.openBtn=l,this.closeBtn=h}init(){this.openBtn.addEventListener("click",()=>this.toggle()),this.closeBtn.addEventListener("click",()=>this.toggle()),this.body.addEventListener("keydown",t=>{t.code==="Escape"&&this.toggle()})}toggle(){this.modal.classList.toggle(this.modalClassActive),this.body.classList.toggle(this.noScroll)}}class C{API_URL;constructor(t){this.API_URL=t}async getData(){const t=await fetch(this.API_URL);return console.log(this.API_URL),await t.json()}}function p(e){const t=new Date(e*1e3),r=t.getHours().toString().padStart(2,"0"),o=t.getMinutes().toString().padStart(2,"0");return`${r}:${o}`}const d=e=>Math.ceil(e),L=e=>`
   <div class="hours-forecast-card forecast-card">
            <div>
              <h3 class="hours-forecast-title forecast-card-title">${p(e.dt)}</h3>
              <div class="hours-forecast-card-deg forecast-card-deg">
                ${d(e.main.temp)}&deg;C
              </div>
            </div>
<img src="https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png" alt="" />          </div>
          </div>
  `,f=e=>{if(!i)return;i.insertAdjacentHTML("beforeend",`
      <section class="hours-forecast">
        <h2 class="hours-forecast__title title">Погода по часам</h2>
        <div class="forecast-cards" data-hours-forecast-cards></div>
      </section>`);const t=document.querySelector("[data-hours-forecast-cards]");if(t)for(let r=0;r<6;r++)t.insertAdjacentHTML("beforeend",L(e.list[r]))},S=(e,t)=>{const r=e[0];return`
   <section class="current">
        <div class="current__heading">
          <div class="current__city">${t.name}</div>
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
          <div class="current__temp-value">${d(r.main.temp_max)}&deg;C</div>
          <div class="current__temp-icon">
            <img src="https://openweathermap.org/img/wn/${r.weather[0].icon}@2x.png" alt="" />
          </div>
        </div>
        <div class="current__weather-description">
          <p>${r.weather[0].description.charAt(0).toUpperCase()+r.weather[0].description.slice(1)}</p>
        </div>
        <div class="current__weather-description">
          <p>Восход: ${p(t.sunrise)}</p>
        </div>
        <div class="current__weather-description">
          <p>Закат: ${p(t.sunset)}</p>
        </div>

        ${r.main.temp>=40?`<div class="current__weather-description">
                <p>Экстремальная жара - смотри не поджарь очко!</p>
              </div>`:""}

        <div class="current__weather-description">
          Вероятность дождя: ${d(r.pop*100)}%
        </div>

        <div class="current__weather-details">
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Ощущается</div>
            <div class="current__weather-detail-value">${d(r.main.feels_like)}&deg;C</div>
          </div>
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Влажность</div>
            <div class="current__weather-detail-value">${r.main.humidity}%</div>
          </div>
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Ветер</div>
            <div class="current__weather-detail-value">${r.wind.speed}</div>
          </div>
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Давление</div>
            <div class="current__weather-detail-value">${r.main.pressure}мб</div>
          </div>
        </div>
      </section>
  `},m=(e,t)=>{i.innerHTML="",i.insertAdjacentHTML("beforeend",S(e,t))},M=e=>{const t=new Date(e.dt*1e3),r=t.toLocaleDateString("ru-RU",{weekday:"short"}).toUpperCase();return`
    <button class="days-forecast-card forecast-card" data-day="${t.toLocaleDateString("en-US",{weekday:"long"}).toLowerCase()}">
      <div>
        <h3 class="days-forecast-title forecast-card-title">${r}</h3>
        <div class="days-forecast-card-deg forecast-card-deg">${d(e.main.temp)}&deg;C</div>
      </div>
      <img src="https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png" alt="" />         
    </button>

  `},v=e=>{if(!i)return;i.insertAdjacentHTML("beforeend",`
    <section class="days-forecast">
        <h2 class="days-forecast__title title">Погода по дням</h2>
        <div
          class="days-forecast-cards forecast-cards"
          data-days-forecast-cards
        ></div>
      </section>`);const t=document.querySelector("[data-days-forecast-cards]");if(!t)return;e.list.filter(o=>o.dt_txt.includes("12:00:00")).forEach(o=>{t.insertAdjacentHTML("beforeend",M(o))})},u=document.querySelector("[data-app]"),_=e=>{if(!u)return;e.list?.[0]?.sys?.pod==="d"?u.insertAdjacentHTML("beforeend",`<svg data-time-indicator class="time-indicator" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </svg>`):u.insertAdjacentHTML("beforeend",'<svg data-time-indicator class="time-indicator" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>')};let a=null;const A=e=>{a=e},b=function(e){A(e),m(e.list,e.city),f(e),v(e),_(e)},g={API_BASE_URL:"https://api.openweathermap.org/data/2.5/forecast",API_ID:void 0,API_KEY:"11cdf37009d6cf0b79c8c8a1094ec724"},$=async e=>{const t=document.querySelector("[data-form-message]"),r=document.querySelector("[data-search-input]");if(!r)return;const o=document.querySelector("[data-time-indicator]");if(t.innerHTML="",i.innerHTML="",o?.remove(),e.preventDefault(),r.value.trim().length===0){t.innerHTML="Проверка на дурака пройдена :D";return}const s=r.value.trim();localStorage.setItem("currentCity",s);try{const n=`${g.API_BASE_URL}?q=${encodeURIComponent(s)}&appid=${g.API_KEY}&units=metric&lang=ru`,l=await new C(n).getData();b(l)}catch{t.innerHTML="бро тут такая ситуация, хз как тебе объяснить, в общем такого города у нас нет, прошу понять и простить"}},k=(e,t)=>(e.list||[]).filter(r=>{const s=new Date(Number(r.dt)*1e3).toLocaleDateString("en-US",{weekday:"long"}).toLowerCase();return console.log(s),s===t.toLowerCase()}),D=e=>{const r=e.target.closest("[data-day]");if(!r||!a)return;const o=r.dataset.day;if(!o)return;const s=k(a,o);s.length&&(m(s,a.city),f(a),v(a),_(a)),console.log(a)},i=document.querySelector("[data-app-render-container]"),E=()=>{new y("[data-settings-modal]","[data-open-settings-modal]","[data-close-settings-modal]","settings-window--active","no-scroll").init()};E();const w=document.querySelector("[data-search-form]");if(!w)throw new Error("Отсутствуют обязательные элементы на странице");w.addEventListener("submit",$);i?.addEventListener("click",D);const I=localStorage.getItem("currentCity");console.log(I);
