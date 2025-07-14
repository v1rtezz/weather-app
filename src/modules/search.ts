import { Api } from '../api/api'
import { renderApp } from './renderApp'
import { CONFIG } from '../config'
import type { IResponse } from '../types/response'
export const search = async (event: Event) => {
  const formMessageElement: HTMLElement | null = document.querySelector(
    '[data-form-message]',
  )
  const searchInput: HTMLFormElement | null = document.querySelector(
    '[data-search-input]',
  )
  const appRenderContainer: HTMLElement | null = document.querySelector(
    '[data-app-render-container]',
  )
  if (!searchInput) {
    return
  }
  const timeIndicator = document.querySelector('[data-time-indicator]')

  formMessageElement!.innerHTML = ''
  appRenderContainer!.innerHTML = ''
  timeIndicator?.remove()

  event.preventDefault()

  if (searchInput.value.trim().length === 0) {
    formMessageElement!.innerHTML = 'Проверка на дурака пройдена :D'
    return
  }
  const city = searchInput.value.trim()
  try {
    const API_URL_WITH_PARAMS = `${CONFIG.API_BASE_URL}?q=${encodeURIComponent(city)}&appid=${CONFIG.API_KEY}&units=metric&lang=ru`
    const weatherApi = new Api(API_URL_WITH_PARAMS)

    const data: IResponse = await weatherApi.getData()
    renderApp(data)
  } catch (err) {
    formMessageElement!.innerHTML =
      'бро тут такая ситуация, хз как тебе объяснить, в общем такого города у нас нет, прошу понять и простить'
  }
}
