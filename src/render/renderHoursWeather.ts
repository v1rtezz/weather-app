import { getHoursWeatherElement } from '../components/ui/hoursWeather'
import type { IResponseItem } from '../types/response'
import { appRenderContainer } from '../main'
export const renderHoursWeather = (list: IResponseItem[]) => {
  if (!appRenderContainer) {
    return
  }

  appRenderContainer.insertAdjacentHTML(
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
  for (let i = 0; i < Math.min(6, list.length); i++) {
    hoursForecast.insertAdjacentHTML(
      'beforeend',
      getHoursWeatherElement(list[i]),
    )
  }
}
