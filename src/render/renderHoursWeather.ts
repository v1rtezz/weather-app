import { getHoursWeatherElement } from '../components/ui/hoursWeather'
import type { IResponse } from '../types/response'
export const renderHoursWeather = (data: IResponse) => {
  const app: HTMLElement | null = document.querySelector('[data-app]')
  if (!app) {
    return
  }

  app.insertAdjacentHTML(
    'beforeend',
    `
      <section class="hours-forecast">
        <h2 class="hours-forecast__title title">Погода по часам</h2>
        <div class="forecast-cards" data-hours-forecast-cards></div>
      </section>`,
  )
  const hoursForecast: HTMLElement | null = document.querySelector(
    '[data-hours-forecast-cards]',
  )

  if (!hoursForecast) {
    return
  }
  for (let i = 0; i < 6; i++) {
    hoursForecast.insertAdjacentHTML(
      'beforeend',
      getHoursWeatherElement(data.list[i]),
    )
  }
}
