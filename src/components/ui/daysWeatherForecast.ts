import type { IResponseItem } from '../../types/response'
import { ceil } from '../../modules/mathCeil'

export const getDaysWeatherElement = (data: IResponseItem): string => {
  const date = new Date(data.dt * 1000)
  const day = date.toLocaleDateString('ru-RU', { weekday: 'short' }).toUpperCase()
  const dayEn = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()

  return `
    <button class="days-forecast-card forecast-card" data-day="${dayEn}">
      <div>
        <h3 class="days-forecast-title forecast-card-title">${day}</h3>
        <div class="days-forecast-card-deg forecast-card-deg">${ceil(data.main.temp)}&deg;C</div>
      </div>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />         
    </button>

  `
}
