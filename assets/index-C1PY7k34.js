(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const l={API_BASE_URL:"http://api.openweathermap.org/data/2.5/forecast",API_KEY:"11cdf37009d6cf0b79c8c8a1094ec724"};class u{modal;modalClassActive;openBtn;closeBtn;noScroll;body=document.body;constructor(s,n,c,e,i){this.modalClassActive=e,this.noScroll=i;const r=document.querySelector(s),o=document.querySelector(n),a=document.querySelector(c);if(!r||!o||!a)throw new Error("Modal: один из селекторов не нашёл элемент в DOM");this.modal=r,this.openBtn=o,this.closeBtn=a}init(){this.openBtn.addEventListener("click",()=>this.toggle()),this.closeBtn.addEventListener("click",()=>this.toggle()),this.body.addEventListener("keydown",s=>{(s.code==="Escape"||s.code==="Backspace")&&this.toggle()})}toggle(){this.modal.classList.toggle(this.modalClassActive),this.body.classList.toggle(this.noScroll)}}class p{API_URL;constructor(s){this.API_URL=s}async getData(){const s=await fetch(this.API_URL);return console.log(this.API_URL),await s.json()}}const d=t=>Math.ceil(t),_=t=>`
   <section class="current">
        <div class="current__heading">
          <div class="current__city">${t.city.name}</div>
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
          <div class="current__temp-value">${d(t.list[0].main.temp_max)}&deg;C</div>
          <div class="current__temp-icon">
            <img src="./src/assets/icons/sunny.svg" alt="" width="50px" />
          </div>
        </div>
        <div class="current__weather-description">
          <p>${t.list[0].weather[0].description.charAt(0).toUpperCase()+t.list[0].weather[0].description.slice(1)}</p>
        </div>
        <div class="current__weather-description">
          Вероятность дождя: ${t.list[0].pop}%
        </div>

        <div class="current__weather-details">
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Ощущается</div>
            <div class="current__weather-detail-value">${d(t.list[0].main.feels_like)}&deg;C</div>
          </div>
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Влажность</div>
            <div class="current__weather-detail-value">${t.list[0].main.humidity}%</div>
          </div>
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Ветер</div>
            <div class="current__weather-detail-value">${t.list[0].wind.speed}</div>
          </div>
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Давление</div>
            <div class="current__weather-detail-value">${t.list[0].main.pressure}мб</div>
          </div>
        </div>
      </section>
      `,v=t=>{document.querySelector("[data-app]")?.insertAdjacentHTML("beforeend",_(t))},h=new u("[data-settings-modal]","[data-open-settings-modal]","[data-close-settings-modal]","settings-window--active","no-scroll");h.init();const g=encodeURIComponent("Москва"),m=`${l.API_BASE_URL}?q=${g}&appid=${l.API_KEY}&units=metric&lang=ru`,f=new p(m),w=await f.getData();v(w);
