import type { IResponseItem } from '../../types/response'
import { ceil } from '../../modules/mathCeil'

export const getDaysWeatherElement = (data: IResponseItem): string => {
  const date = new Date(data.dt * 1000) // умножаем на 1000, т.к. dt в секундах
  const day = date.toLocaleDateString('ru-RU', { weekday: 'short' }).toUpperCase()

  return `
   <div class="days-forecast-card forecast-card">
            <div>
              <h3 class="days-forecast-title forecast-card-title">${day}</h3>
              <div class="days-forecast-card-deg forecast-card-deg">
                ${ceil(data.main.temp)}&deg;C
              </div>
            </div>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />          </div>
          </div>
  `
}
