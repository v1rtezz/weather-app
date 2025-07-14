import { getCurrentWeatherElement } from '../components/ui/currentWeather'
import type { IResponse } from '../types/response'
export const renderCurrentWeather = (data: IResponse) => {
  const appRenderContainer = document.querySelector(
    '[data-app-render-container]',
  )
  appRenderContainer?.insertAdjacentHTML(
    'beforeend',
    getCurrentWeatherElement(data),
  )
}
