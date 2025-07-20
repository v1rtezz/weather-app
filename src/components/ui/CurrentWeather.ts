import { Component } from './Component'
import type { IWeatherResponse } from '../../types/response'
import { formatUnixTimeToHHMM } from '../../utils/formatUnixTime'
import { addFavorite, getFavorites, removeFavorite } from '../../utils/features'
import { Features } from '../Features'

export class CurrentWeather extends Component {
  constructor(public data: IWeatherResponse | null = null) {
    super('section', 'current', 'data-current-weather')
  }

  private async createElement(): Promise<void> {
    if (!this.data) {
      this.element.innerHTML = '<p>Ошибка загрузки данных</p>'
      return
    }

    const rainChanceItem = this.data.list.find(
      (item) => item.pop && item.pop > 0,
    )

    const popPercent = rainChanceItem
      ? `${Math.ceil(rainChanceItem.pop * 100)}%`
      : 'Нет данных'

    this.element.innerHTML = `
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
          <p>${this.data.list[0].weather[0].description.charAt(0).toUpperCase() + this.data.list[0].weather[0].description.slice(1)}</p>
        </div>
        <div class="current__weather-description">
          Вероятность дождя: ${popPercent}
                  </div>
           <div class="current__weather-description">
          <p>Восход: ${formatUnixTimeToHHMM(this.data.city.sunrise)}</p>
        </div>
         <div class="current__weather-description">
          <p>Закат: ${formatUnixTimeToHHMM(this.data.city.sunset)}</p>
        </div>
         ${
           this.data.list[0].main.temp >= 40
             ? `<div class="current__weather-description">
          <p>Экстремальная жара - смотри не поджарь очко!</p>
        </div>`
             : ''
         }
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
`

    const favBtn = this.element.querySelector('.current__btn')
    if (favBtn) {
      favBtn.addEventListener('click', () => {
        if (!this.data) return
        const city = this.data.city.name
        const isActive = favBtn.classList.contains('current__btn--active')

        if (isActive) {
          removeFavorite(city)
          favBtn.classList.remove('current__btn--active')
        } else {
          addFavorite(city)
          favBtn.classList.add('current__btn--active')
        }

        const oldFeatures = document.querySelector('[data-features]')
        if (oldFeatures) oldFeatures.remove()
        const newFeatures = new Features().render()
        document.querySelector('[data-app]')?.append(newFeatures)
      })
    }

    if (favBtn && this.data) {
      const isFavorite = getFavorites().includes(this.data.city.name)
      if (isFavorite) {
        favBtn.classList.add('current__btn--active')
      }
    }
  }

  public render(): HTMLElement {
    this.createElement()
    return this.element
  }
}
