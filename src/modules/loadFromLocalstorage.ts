import { CONFIG } from '../config'
import { renderApp } from './renderApp'
import { Api } from '../api/api'
export const loadFromLocalstorage = async() => {
  const savedCity = localStorage.getItem('currentCity')

  if (savedCity) {
    const API_URL_WITH_PARAMS = `${CONFIG.API_BASE_URL}?q=${encodeURIComponent(savedCity)}&appid=${CONFIG.API_KEY}&units=metric&lang=ru`
    const weatherApi = new Api(API_URL_WITH_PARAMS)

    const data = await weatherApi.getData()
    renderApp(data)
  }
}
