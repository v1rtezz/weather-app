// import { ceil } from '../../modules/mathCeil'
import type { IResponseItem } from '../../types/response'
import { formatUnixTimeToHHMM } from '../../modules/formatUnixTime'

export const getHoursWeatherElement = (data: IResponseItem): string => {
  return `
   <div class="hours-forecast-card forecast-card">
            <div>
              <h3 class="hours-forecast-title forecast-card-title">${formatUnixTimeToHHMM(data.dt)}</h3>
              <div class="hours-forecast-card-deg forecast-card-deg">
                25&deg;C
              </div>
            </div>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />          </div>
          </div>
  `
}
