import './css/vars.css'
import './css/general.css'
import './css/settings.css'
import './css/app.css'

import './types/response'
import { Modal } from './modules/modal'
import { search } from './modules/search'
import { showWeatherForDay } from './modules/showWeatherForDay'

//FIXME: перенести экспорт
export const appRenderContainer: HTMLElement | null = document.querySelector(
  '[data-app-render-container]',
)

const appInit = () => {
  const settingsModal = new Modal(
    '[data-settings-modal]',
    '[data-open-settings-modal]',
    '[data-close-settings-modal]',
    'settings-window--active',
    'no-scroll',
  )
  settingsModal.init()
}
appInit()

const form: HTMLFormElement | null =
  document.querySelector('[data-search-form]')

if (!form) {
  throw new Error('Отсутствуют обязательные элементы на странице')
}

form.addEventListener('submit', search)

appRenderContainer?.addEventListener('click', showWeatherForDay)

import { loadFromLocalstorage } from './modules/loadFromLocalstorage'
loadFromLocalstorage()