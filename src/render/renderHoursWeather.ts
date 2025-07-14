import { getHoursWeatherElement } from '../components/ui/hoursWeather'
import type { IResponse } from '../types/response'
export const renderHoursWeather = (data: IResponse) => {
  const hoursForecast: HTMLElement | null = document.querySelector(
    '[data-hours-forecast-cards]',
  )
  if (!hoursForecast) {
    return
  }
  hoursForecast.innerHTML = ''
  for (let i = 0; i < 6; i++) {
    hoursForecast?.insertAdjacentHTML(
      'beforeend',
      getHoursWeatherElement(data.list[i]),
    )
    
  }
}
