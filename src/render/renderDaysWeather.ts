import { getDaysWeatherElement } from '../components/ui/daysWeatherForecast'
import type { IResponse } from '../types/response'
import { appRenderContainer } from '../main'
export const renderDaysWeather = (data: IResponse) => {
  if (!appRenderContainer) {
    return
  }

appRenderContainer.insertAdjacentHTML(
    'beforeend',
    `
    <section class="days-forecast">
        <h2 class="days-forecast__title title">Погода по дням</h2>
        <div
          class="days-forecast-cards forecast-cards"
          data-days-forecast-cards
        ></div>
      </section>`,
  )
  const daysForecast: HTMLElement | null = document.querySelector(
    '[data-days-forecast-cards]',
  )
  if (!daysForecast) {
    return
  }

  const filtered = data.list.filter((item) => item.dt_txt.includes('12:00:00'))

  filtered.forEach((element) => {
    daysForecast.insertAdjacentHTML('beforeend', getDaysWeatherElement(element))
  })
}
