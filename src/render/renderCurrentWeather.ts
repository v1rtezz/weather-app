import { getCurrentWeatherElement } from "../components/ui/currentWeather"
import type { IResponse } from '../types/response'
export const renderCurrentWeather = (data:IResponse) => {
  const app = document.querySelector('[data-app]')
  app?.insertAdjacentHTML('beforeend', getCurrentWeatherElement(data))
}