import './css/vars.css'
import './css/general.css'
import './css/settings.css'
import './css/app.css'

import { CONFIG } from './config/index'
import { Api } from './api/api'
import { Modal } from './modules/modal'
import { renderHoursWeather } from './render/renderHoursWeather'
import { renderCurrentWeather } from './render/renderCurrentWeather'
import { renderDaysWeather } from './render/renderDaysWeather'
import { renderTimeOfDayIcon } from './modules/renderTimeOfDayIcon'

// FIXME: убрать await
const city = encodeURIComponent('Москва')
const API_URL_WITH_PARAMS = `${CONFIG.API_BASE_URL}?q=${city}&appid=${CONFIG.API_KEY}&units=metric&lang=ru`
const weatherApi = new Api(API_URL_WITH_PARAMS)

const data = await weatherApi.getData()


const appInit = () => {
  const settingsModal = new Modal(
    '[data-settings-modal]',
    '[data-open-settings-modal]',
    '[data-close-settings-modal]',
    'settings-window--active',
    'no-scroll',
  )
  settingsModal.init()
  renderCurrentWeather(data)
  renderHoursWeather(data)
  renderDaysWeather(data)
  renderTimeOfDayIcon(data)
}
appInit()
