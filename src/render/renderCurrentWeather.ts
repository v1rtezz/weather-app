import { getCurrentWeatherElement } from '../components/ui/currentWeather'
import type { IResponse } from '../types/response'
import { appRenderContainer } from '../main'
export const renderCurrentWeather = (forecasts: IResponse['list'], city: IResponse['city']) => {
  appRenderContainer!.innerHTML = '' 
  appRenderContainer!.insertAdjacentHTML('beforeend', getCurrentWeatherElement(forecasts, city))
}

