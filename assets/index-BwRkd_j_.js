var E=Object.defineProperty;var S=(i,t,e)=>t in i?E(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var o=(i,t,e)=>S(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();class d{constructor(t,e,r){o(this,"element");this.element=document.createElement(t),this.element.className=e,r&&this.element.setAttribute(r,"")}}class M extends d{constructor(){super("header","header")}createElement(){this.element.innerHTML=` 
          <img
            class="logo"
            src="./logo.png"
            alt=""
            width="100"
            height="100"
          />
          <h1 class="header__title">
            Забудь о неожиданном&nbsp;дожде с&nbsp;Weather App!
          </h1>
          `}render(){return this.createElement(),this.element}}class b extends d{constructor(t,e){super(t,e)}render(){return this.element}}class L{constructor(t){o(this,"element");this.element=document.createElement("main"),this.element.className=t;const e=new b("div","container").render();this.element.append(e)}}class u extends Error{constructor(t,e,r,s){super(`Http error ${t}: ${e}`),this.statusCode=t,this.statusText=e,this.responseBody=r,this.response=s}}const h={API_URL:"https://api.openweathermap.org",API_KEY:"11cdf37009d6cf0b79c8c8a1094ec724",FEATURES_KEY:"favoriteCities"};class T{constructor({baseUrl:t,headers:e,apiKey:r}){o(this,"baseUrl");o(this,"defaultHeaders");o(this,"apiKey");this.baseUrl=t,this.defaultHeaders=e||{},this.apiKey=r}async request(t,e={},r){const s=this.baseUrl+t+(r?`&appid=${r}`:""),a={...this.defaultHeaders,...e.headers||{}},n=await fetch(s,{...e,headers:a}),c=await n.json();if(!n.ok)throw new u(n.status,n.statusText,c,n);return c}async get(t,e={}){let s;for(let a=1;a<=3;a++)try{return await this.request(t,{...e,method:"GET"},this.apiKey)}catch(n){s=n,a<3&&await new Promise(c=>setTimeout(c,300))}throw s}}const x=new T({baseUrl:h.API_URL,apiKey:h.API_KEY});class m{static async get(t){const e=encodeURIComponent(t.trim());return await x.get(`/data/2.5/forecast?q=${e}&units=metric&lang=ru`)}}class k extends d{constructor(t,e){super("section","search"),this.onSearch=t,this.onError=e}createElement(){this.element.innerHTML=` <form class="search__form" data-search-form>
          <label class="hidden" for="search-input">Выберите город</label>
          <input
            name="search-input"
            type="text"
            class="search__input"
            data-search-input
            placeholder="Нью-Йорк"
            data-search-input
          />

          <button type="submit" class="search__btn">
            <svg
              width="50px"
              viewBox="0 0 24 24"
              fill="none"
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
                  opacity="0.1"
                  d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  fill="none"
                ></path>
                <path
                  d="M15 15L21 21"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke-width="2"
                ></path>
              </g>
            </svg>
          </button>
        </form>
        <p class="form-message" data-form-message></p>`,this.element.querySelector("[data-search-form]").addEventListener("submit",this.handleSubmit.bind(this))}async handleSubmit(t){t.preventDefault();const e=this.element.querySelector("[data-search-input]"),r=this.element.querySelector("[data-form-message]");r.innerHTML="";const s=e.value.trim();if(s.length===0){r.textContent="Проверка на дурака прошла успешно",this.onError();return}try{const a=await m.get(s);this.onSearch(a),localStorage.setItem("currentCity",s)}catch(a){a instanceof u&&(this.onError(),r.textContent="Окак, видать твоего города у нас нет, сорян. Текст ошибки:"+a.message)}}render(){return this.createElement(),this.element}}function p(i){const t=new Date(i*1e3),e=t.getHours().toString().padStart(2,"0"),r=t.getMinutes().toString().padStart(2,"0");return`${e}:${r}`}const{FEATURES_KEY:f}=h,l=()=>{const i=localStorage.getItem(f);return i?JSON.parse(i):[]},D=i=>{const t=l();t.includes(i)||localStorage.setItem(f,JSON.stringify([...t,i]))},H=i=>{const t=l().filter(e=>e!==i);localStorage.setItem(f,JSON.stringify(t))};class W extends d{constructor(t){super("button","features__card"),this.city=t}async createElement(){const t=await m.get(this.city),e=t.list[0],r=t.list.find(a=>a.pop&&a.pop>0),s=r?`${Math.ceil(r.pop*100)}%`:"Нет данных";this.element.innerHTML=`
      <div class="features__card-left">
              <h3 class="features__card-title">${this.city}</h3>
              <p class="features__card-deg">${Math.ceil(e.main.temp)}&deg;</p>
              <p class="features__card-rain-chance">
  Вероятность дождя: ${s}
                </p>
            </div>
            <div class="features__card-right">
                   <img src="https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png" alt="" class="features__card-img" />         

            </div>
    `}render(){return this.createElement(),this.element}}class C extends d{constructor(e){super("section","features","data-features");o(this,"featuresList",l());this.onCityClick=e,this.featuresList=l(),this.createElement()}createElement(){this.element.innerHTML=`
      <h2 class="features__title title">Избранные города</h2>
      <div class="features__cards" data-features-cards></div>
    `;const e=this.element.querySelector("[data-features-cards]");e&&this.featuresList.forEach(r=>{const a=new W(r).render();a.addEventListener("click",()=>{var n;(n=this.onCityClick)==null||n.call(this,r)}),e.append(a)})}render(){return this.createElement(),this.element}}class w extends d{constructor(t=null){super("section","current","data-current-weather"),this.data=t}async createElement(){if(!this.data){this.element.innerHTML="<p>Ошибка загрузки данных</p>";return}const t=this.data.list.find(s=>s.pop&&s.pop>0),e=t?`${Math.ceil(t.pop*100)}%`:"Нет данных";this.element.innerHTML=`
        <div class="current__heading">
          <div class="current__city">${this.data.city.name}</div>
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
          <div class="current__temp-value">${Math.ceil(this.data.list[0].main.temp_max)}&deg;C</div>
          <div class="current__temp-icon">
      <img src="https://openweathermap.org/img/wn/${this.data.list[0].weather[0].icon}@2x.png" alt="" />         
          </div>
        </div>
        <div class="current__weather-description">
          <p>${this.data.list[0].weather[0].description.charAt(0).toUpperCase()+this.data.list[0].weather[0].description.slice(1)}</p>
        </div>
        <div class="current__weather-description">
          Вероятность дождя: ${e}
                  </div>
           <div class="current__weather-description">
          <p>Восход: ${p(this.data.city.sunrise)}</p>
        </div>
         <div class="current__weather-description">
          <p>Закат: ${p(this.data.city.sunset)}</p>
        </div>
         ${this.data.list[0].main.temp>=40?`<div class="current__weather-description">
          <p>Экстремальная жара - смотри не поджарь очко!</p>
        </div>`:""}
        <div class="current__weather-details">
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Ощущается</div>
            <div class="current__weather-detail-value">${Math.ceil(this.data.list[0].main.feels_like)}&deg;C</div>
          </div>
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Влажность</div>
            <div class="current__weather-detail-value">${this.data.list[0].main.humidity}%</div>
          </div>
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Ветер</div>
            <div class="current__weather-detail-value">${this.data.list[0].wind.speed}</div>
          </div>
          <div class="current__weather-detail">
            <div class="current__weather-detail-label">Давление</div>
            <div class="current__weather-detail-value">${this.data.list[0].main.pressure}мб</div>
          </div>
        </div>
`;const r=this.element.querySelector(".current__btn");r&&r.addEventListener("click",()=>{var g;if(!this.data)return;const s=this.data.city.name;r.classList.contains("current__btn--active")?(H(s),r.classList.remove("current__btn--active")):(D(s),r.classList.add("current__btn--active"));const n=document.querySelector("[data-features]");n&&n.remove();const c=new C().render();(g=document.querySelector("[data-app]"))==null||g.append(c)}),r&&this.data&&l().includes(this.data.city.name)&&r.classList.add("current__btn--active")}render(){return this.createElement(),this.element}}class $ extends d{constructor(t){super("div","hours-forecast-card forecast-card"),this.snapshot=t}async createElement(){this.element.innerHTML=`
      <div>
        <h3 class="hours-forecast-title forecast-card-title">${p(this.snapshot.dt)}</h3>
        <div class="hours-forecast-card-deg forecast-card-deg">
          ${Math.ceil(this.snapshot.main.temp)}&deg;C
        </div>
      </div>
      <img src="https://openweathermap.org/img/wn/${this.snapshot.weather[0].icon}@2x.png" alt="" />
    `}render(){return this.createElement(),this.element}}class v extends d{constructor(t=null){super("section","hours-forecast","data-current-hours-weather"),this.data=t}async createElement(){if(!this.data){this.element.innerHTML="<p>Ошибка загрузки данных</p>";return}this.element.innerHTML=`
        <h2 class="hours-forecast__title title">Погода по часам</h2>
        <div class="forecast-cards" data-hours-forecast-cards-wrapper></div>
  `;const t=this.element.querySelector("[data-hours-forecast-cards-wrapper]");if(!t)return;this.data.list.slice(0,5).forEach(r=>{const s=new $(r);t.append(s.render())})}render(){return this.createElement(),this.element}}class _ extends d{constructor(t,e){super("button","days-forecast-card forecast-card"),this.snapshot=t,this.selectedDt=e}async createElement(){const e=new Date(this.snapshot.dt*1e3).toLocaleDateString("ru-RU",{weekday:"short"}).toUpperCase();this.element.innerHTML=`
      <div>
        <h3 class="days-forecast-title forecast-card-title">${e}</h3>
        <div class="days-forecast-card-deg forecast-card-deg">${Math.ceil(this.snapshot.main.temp)}&deg;C</div>
      </div>
      <img src="https://openweathermap.org/img/wn/${this.snapshot.weather[0].icon}@2x.png" alt="" />         
    `,this.selectedDt===this.snapshot.dt&&this.element.classList.add("days-forecast-card--active")}render(){return this.createElement(),this.element}}class y extends d{constructor(t=null,e,r){super("section","days-forecast","data-current-days-weather"),this.data=t,this.onDayClick=e,this.selectedDt=r}async createElement(){if(!this.data){this.element.innerHTML="<p>Ошибка загрузки данных</p>";return}this.element.innerHTML=`
        <h2 class="days-forecast__title title">Погода по дням</h2>
       <div class="days-forecast-cards forecast-cards" data-days-forecast-cards></div>
  `;const t=this.element.querySelector("[data-days-forecast-cards]");if(!t)return;this.data.list.filter(r=>r.dt_txt.includes("12:00:00")).forEach(r=>{const a=(this.selectedDt!==void 0?new _(r,this.selectedDt):new _(r)).render();a.addEventListener("click",()=>{this.onDayClick&&this.onDayClick(r.dt)}),t.append(a)})}render(){return this.createElement(),this.element}}class F extends d{constructor(t=null){super("div","time-indicator","data-time-indicator"),this.data=t}createElement(){var e,r,s;if(!this.data||!this.data.list||this.data.list.length===0){this.element.innerHTML="<p>Нет данных для отображения</p>";return}((s=(r=(e=this.data.list)==null?void 0:e[0])==null?void 0:r.sys)==null?void 0:s.pod)==="d"?this.element.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </svg>`:this.element.innerHTML=`
        <svg viewBox="0 0 24 24" fill="n  one" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`}render(){return this.createElement(),this.element}}class I extends d{constructor(){super("div","switch-wrapper","data-theme-switcher")}createElement(){this.element.innerHTML=`
<label class="switch">
  <span class="sun">
    <!-- SVG солнца -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="#ffd43b">
        <circle r="5" cy="12" cx="12"></circle>
        <path d="M21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM4 13H3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM17.66 7.34a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.75.29zM5.64 19.36a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.24zM12 5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zM12 22a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zM6.34 7.34a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29zM18.36 19.36a1 1 0 0 1-.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.24z"></path>
      </g>
    </svg>
  </span>
  <span class="moon">
    <!-- SVG луны -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path d="M223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
    </svg>
  </span>
  <input type="checkbox" class="input">
  <span class="slider"></span>
</label>
    `;const t=this.element.querySelector("input"),e=document.body,r=c=>{e.setAttribute("data-theme",c),localStorage.setItem("theme",c),t.checked=c==="dark"},s=localStorage.getItem("theme"),a=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";r(s??a),t==null||t.addEventListener("change",()=>{const c=t.checked?"dark":"light";r(c)})}render(){return this.createElement(),this.element}}class R extends L{constructor(){super("main");o(this,"CITY_KEY","currentCity");o(this,"data",null);o(this,"selectedDt",null)}async getCurrentCityFromLocalstorage(){const e=localStorage.getItem(this.CITY_KEY);e&&await this.fetchData(e)}async fetchData(e){try{const r=await m.get(e);if(!r)return;this.data=r}catch(r){r instanceof u&&console.error(r.message)}}async createPage(){const e=this.element;this.appendSearch(e),this.appendThemeSwitcher(e),await this.getCurrentCityFromLocalstorage(),this.data&&(this.renderFullWeather(e),this.appendTimeIndicator(e))}updateCurrentWeather(e){this.clearWeather(e),this.data&&this.renderFullWeather(e)}appendSearch(e){const r=new k(s=>{this.data=s,this.updateCurrentWeather(e)},()=>this.clearWeather(e));e.append(r.render())}renderFullWeather(e){this.clearWeather(e),this.appendCurrentWeather(e),this.appendCurrentHoursWeather(e),this.appendCurrentDaysWeather(e),this.appendFeatures(e),this.appendTimeIndicator(e)}clearWeather(e){["[data-current-weather]","[data-current-hours-weather]","[data-current-days-weather]","[data-features]","[data-time-indicator]"].forEach(s=>{const a=e.querySelector(s);a&&a.remove()})}async appendCurrentWeather(e){e.append(new w(this.data).render())}async appendCurrentHoursWeather(e){e.append(new v(this.data).render())}async appendThemeSwitcher(e){e.append(new I().render())}appendFeatures(e){const r=e.querySelector("[data-features]");r&&r.remove();const s=new C(async a=>{localStorage.setItem(this.CITY_KEY,a),await this.fetchData(a),this.renderFullWeather(e)});e.append(s.render())}appendTimeIndicator(e){e.append(new F(this.data).render())}async appendCurrentDaysWeather(e){const r=new y(this.data,s=>{this.selectedDt=s,this.updateCurrentWeatherForDay(e,s)},this.selectedDt??void 0);e.append(r.render())}updateCurrentWeatherForDay(e,r){if(!this.data)return;const s=new Date(r*1e3),a=this.data.list.filter(n=>{const c=new Date(n.dt*1e3);return c.getFullYear()===s.getFullYear()&&c.getMonth()===s.getMonth()&&c.getDate()===s.getDate()});a.length!==0&&(this.selectedDt=r,this.clearWeather(e),e.append(new w({...this.data,list:a}).render()),e.append(new v({...this.data,list:a}).render()),e.append(new y(this.data,n=>this.updateCurrentWeatherForDay(e,n),this.selectedDt).render()),this.appendFeatures(e),this.appendTimeIndicator(e))}async render(){return await this.createPage(),this.element}}class V{constructor(){o(this,"root");this.root=document.querySelector("[data-app]")}async init(){this.root.append(new M().render()),this.root.append(await new R().render())}}new V().init();
