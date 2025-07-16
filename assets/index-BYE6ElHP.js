var g=Object.defineProperty;var w=(a,t,e)=>t in a?g(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var i=(a,t,e)=>w(a,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();class f{constructor(t,e,r,s,n){i(this,"modal");i(this,"modalClassActive");i(this,"openBtn");i(this,"closeBtn");i(this,"noScroll");i(this,"body",document.body);this.modalClassActive=s,this.noScroll=n;const c=document.querySelector(t),d=document.querySelector(e),l=document.querySelector(r);if(!c)throw new Error(`Modal: не найден элемент по селектору "${t}"`);if(!d)throw new Error(`Modal: не найден элемент по селектору "${e}"`);if(!l)throw new Error(`Modal: не найден элемент по селектору "${r}"`);if(!c||!d||!l)throw new Error("Modal: один из селекторов не нашёл элемент в DOM");this.modal=c,this.openBtn=d,this.closeBtn=l}init(){this.openBtn.addEventListener("click",()=>this.toggle()),this.closeBtn.addEventListener("click",()=>this.toggle()),this.body.addEventListener("keydown",t=>{t.code==="Escape"&&this.toggle()})}toggle(){this.modal.classList.toggle(this.modalClassActive),this.body.classList.toggle(this.noScroll)}}class o{constructor(t,e,r){i(this,"element");this.element=document.createElement(t),this.element.className=e,r&&this.element.setAttribute(r,"")}}class v extends o{constructor(){super("header","header")}createElement(){this.element.innerHTML=` <button class="open-settings" data-open-settings-modal>
            <svg
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xml:space="preserve"
              fill="#fff"
              stroke="#fff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <style type="text/css">
                  .st0 {
                    fill: #fff;
                  }
                </style>
                <g>
                  <path
                    class="st0"
                    d="M502.325,307.303l-39.006-30.805c-6.215-4.908-9.665-12.429-9.668-20.348c0-0.084,0-0.168,0-0.252 c-0.014-7.936,3.44-15.478,9.667-20.396l39.007-30.806c8.933-7.055,12.093-19.185,7.737-29.701l-17.134-41.366 c-4.356-10.516-15.167-16.86-26.472-15.532l-49.366,5.8c-7.881,0.926-15.656-1.966-21.258-7.586 c-0.059-0.06-0.118-0.119-0.177-0.178c-5.597-5.602-8.476-13.36-7.552-21.225l5.799-49.363 c1.328-11.305-5.015-22.116-15.531-26.472L337.004,1.939c-10.516-4.356-22.646-1.196-29.701,7.736l-30.805,39.005 c-4.908,6.215-12.43,9.665-20.349,9.668c-0.084,0-0.168,0-0.252,0c-7.935,0.014-15.477-3.44-20.395-9.667L204.697,9.675 c-7.055-8.933-19.185-12.092-29.702-7.736L133.63,19.072c-10.516,4.356-16.86,15.167-15.532,26.473l5.799,49.366 c0.926,7.881-1.964,15.656-7.585,21.257c-0.059,0.059-0.118,0.118-0.178,0.178c-5.602,5.598-13.36,8.477-21.226,7.552 l-49.363-5.799c-11.305-1.328-22.116,5.015-26.472,15.531L1.939,174.996c-4.356,10.516-1.196,22.646,7.736,29.701l39.006,30.805 c6.215,4.908,9.665,12.429,9.668,20.348c0,0.084,0,0.167,0,0.251c0.014,7.935-3.44,15.477-9.667,20.395L9.675,307.303 c-8.933,7.055-12.092,19.185-7.736,29.701l17.134,41.365c4.356,10.516,15.168,16.86,26.472,15.532l49.366-5.799 c7.882-0.926,15.656,1.965,21.258,7.586c0.059,0.059,0.118,0.119,0.178,0.178c5.597,5.603,8.476,13.36,7.552,21.226l-5.799,49.364 c-1.328,11.305,5.015,22.116,15.532,26.472l41.366,17.134c10.516,4.356,22.646,1.196,29.701-7.736l30.804-39.005 c4.908-6.215,12.43-9.665,20.348-9.669c0.084,0,0.168,0,0.251,0c7.936-0.014,15.478,3.44,20.396,9.667l30.806,39.007 c7.055,8.933,19.185,12.093,29.701,7.736l41.366-17.134c10.516-4.356,16.86-15.168,15.532-26.472l-5.8-49.366 c-0.926-7.881,1.965-15.656,7.586-21.257c0.059-0.059,0.119-0.119,0.178-0.178c5.602-5.597,13.36-8.476,21.225-7.552l49.364,5.799 c11.305,1.328,22.117-5.015,26.472-15.531l17.134-41.365C514.418,326.488,511.258,314.358,502.325,307.303z M281.292,329.698 c-39.68,16.436-85.172-2.407-101.607-42.087c-16.436-39.68,2.407-85.171,42.087-101.608c39.68-16.436,85.172,2.407,101.608,42.088 C339.815,267.771,320.972,313.262,281.292,329.698z"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
          <img
            class="logo"
            src="./assets/icons/logo.png"
            alt=""
            width="100"
            height="100"
          />
          <h1 class="header__title">
            Забудь о неожиданном&nbsp;дожде с&nbsp;Weather App!
          </h1>
          `}render(){return this.createElement(),this.element}}class _ extends o{constructor(t,e){super(t,e)}render(){return this.element}}class y{constructor(t){i(this,"element");this.element=document.createElement("main"),this.element.className=t;const e=new _("div","container").render();this.element.append(e)}}class u extends Error{constructor(t,e,r,s){super(`Http error ${t}: ${e}`),this.statusCode=t,this.statusText=e,this.responseBody=r,this.response=s}}const p={API_URL:"https://api.openweathermap.org",API_KEY:"11cdf37009d6cf0b79c8c8a1094ec724"};class C{constructor({baseUrl:t,headers:e,apiKey:r}){i(this,"baseUrl");i(this,"defaultHeaders");i(this,"apiKey");this.baseUrl=t,this.defaultHeaders=e||{},this.apiKey=r}async request(t,e={},r){const s=this.baseUrl+t+(r?`&appid=${r}`:""),n={...this.defaultHeaders,...e.headers||{}},c=await fetch(s,{...e,headers:n}),d=await c.json();if(!c.ok)throw new u(c.status,c.statusText,d,c);return d}get(t,e={}){return this.request(t,{...e,method:"GET"},this.apiKey)}}const b=new C({baseUrl:p.API_URL,apiKey:p.API_KEY});class m{static async get(t){const e=encodeURIComponent(t.trim());return await b.get(`/data/2.5/forecast?q=${e}&units=metric&lang=ru`)}}class S extends o{constructor(t){super("section","search"),this.onSearch=t}createElement(){this.element.innerHTML=` <form class="search__form" data-search-form>
          <label class="hidden" for="search-input">Выберите город</label>
          <input
            name="search-input"
            type="text"
            class="search__input"
            data-search-input
            placeholder="Нью-Йорк, Соединенные штаты Америки"
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
        <p class="form-message" data-form-message></p>`,this.element.querySelector("[data-search-form]").addEventListener("submit",this.handleSubmit.bind(this))}async handleSubmit(t){t.preventDefault();const e=this.element.querySelector("[data-search-input]"),r=this.element.querySelector("[data-form-message]");if(e.value.trim().length===0){r.textContent="Проверка на дурака прошла успешно";return}try{const s=await m.get(e.value.trim());this.onSearch(s),localStorage.setItem("currentCity",e.value.trim())}catch(s){s instanceof u&&(r.textContent="Сорян, не смог найти твой город :( вот текст ошибки если шаришь: "+s.message)}}render(){return this.createElement(),this.element}}function h(a){const t=new Date(a*1e3),e=t.getHours().toString().padStart(2,"0"),r=t.getMinutes().toString().padStart(2,"0");return`${e}:${r}`}class x extends o{constructor(t=null){super("section","current","data-current-weather"),this.data=t}async createElement(){if(!this.data){this.element.innerHTML="<p>Ошибка загрузки данных</p>";return}const t=this.data.list.find(r=>r.pop&&r.pop>0),e=t?`${Math.ceil(t.pop*100)}%`:"Нет данных о вероятности дождя";this.element.innerHTML=`
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
            <img src="./src/assets/icons/sunny.svg" alt="" width="50px" />
          </div>
        </div>
        <div class="current__weather-description">
          <p>${this.data.list[0].weather[0].description.charAt(0).toUpperCase()+this.data.list[0].weather[0].description.slice(1)}</p>
        </div>
        <div class="current__weather-description">
          Вероятность дождя: ${e}
                  </div>
           <div class="current__weather-description">
          <p>Восход: ${h(this.data.city.sunrise)}</p>
        </div>
         <div class="current__weather-description">
          <p>Закат: ${h(this.data.city.sunset)}</p>
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
`}render(){return this.createElement(),this.element}}class E extends o{constructor(t){super("div","hours-forecast-card forecast-card"),this.snapshot=t}async createElement(){this.element.innerHTML=`
      <div>
        <h3 class="hours-forecast-title forecast-card-title">${h(this.snapshot.dt)}</h3>
        <div class="hours-forecast-card-deg forecast-card-deg">
          ${Math.ceil(this.snapshot.main.temp)}&deg;C
        </div>
      </div>
      <img src="https://openweathermap.org/img/wn/${this.snapshot.weather[0].icon}@2x.png" alt="" />
    `}render(){return this.createElement(),this.element}}class L extends o{constructor(t=null){super("section","hours-forecast","data-current-hours-weather"),this.data=t}async createElement(){if(!this.data){this.element.innerHTML="<p>Ошибка загрузки данных</p>";return}this.element.innerHTML=`
        <h2 class="hours-forecast__title title">Погода по часам</h2>
        <div class="forecast-cards" data-hours-forecast-cards-wrapper></div>
  `;const t=this.element.querySelector("[data-hours-forecast-cards-wrapper]");if(!t)return;this.data.list.slice(0,5).forEach(r=>{const s=new E(r);t.append(s.render())})}render(){return this.createElement(),this.element}}class M extends y{constructor(){super("main");i(this,"data",null)}async getDataFromLocalstorage(){try{const e=localStorage.getItem("currentCity");if(!e)return;const r=await m.get(e);if(!r)return;this.data=r}catch(e){e instanceof u&&console.error(e.message)}}async createPage(){const e=this.element.querySelector(".container");this.appendSearch(e),await this.getDataFromLocalstorage(),this.data&&(this.appendCurrentWeather(e),this.appendCurrentHoursWeather(e))}updateCurrentWeather(e){const r=e.querySelector("[data-current-weather]"),s=e.querySelector("[data-current-hours-weather]");r&&r.remove(),s&&s.remove(),this.data&&(this.appendCurrentWeather(e),this.appendCurrentHoursWeather(e))}appendSearch(e){const r=new S(s=>{this.data=s,this.updateCurrentWeather(e)});e.append(r.render())}async appendCurrentWeather(e){e.append(new x(this.data).render())}async appendCurrentHoursWeather(e){e.append(new L(this.data).render())}async render(){return await this.createPage(),this.element}}class $ extends o{constructor(){super("div","settings-window","data-settings-modal")}createElement(){this.element.innerHTML=`
      <div class="settings-window__content">
        <h2 class="settings-window__title title">
          Настройте все на свой вкус!
        </h2>
        <div class="settings-window__theme">
          <h3>Выберите тему:</h3>
          <div class="settings-window__theme-switcher">
            <button class="settings-window__theme-switcher-btn">Светлая</button>
            <button class="settings-window__theme-switcher-btn">Темная</button>
            <button class="settings-window__theme-switcher-btn">
              Светлая (Высокий контраст)
            </button>
            <button class="settings-window__theme-switcher-btn">
              Темная (Высокий контраст)
            </button>
          </div>
        </div>
        <div class="settings-window__language">
          <h3>Выберите язык:</h3>
          <p>пока нема, но вы держитесь</p>
        </div>
        <button class="close-settings" data-close-settings-modal>
          <svg
            viewBox="0 -0.5 21 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>close [#1511]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke-width="1" fill-rule="evenodd">
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-419.000000, -240.000000)"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <polygon
                      id="close-[#1511]"
                      points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
          `}render(){return this.createElement(),this.element}}class k{constructor(){i(this,"root");this.root=document.querySelector("[data-app]")}async init(){this.root.append(new v().render()),this.root.append(await new M().render()),this.root.append(new $().render()),new f("[data-settings-modal]","[data-open-settings-modal]","[data-close-settings-modal]","settings-window--active","no-scroll").init()}}new k().init();
