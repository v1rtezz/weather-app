import './css/vars.css'
import './css/general.css'
import './css/settings.css'
import './css/app.css'

import { CONFIG } from './config/index'

import { Modal } from './modules/modal'
const settingsModal = new Modal(
  '[data-settings-modal]',
  '[data-open-settings-modal]',
  '[data-close-settings-modal]',
  'settings-window--active',
  'no-scroll'
)
settingsModal.init()


// FIXME: убрать await
const city = encodeURIComponent('Москва')
const API_URL_WITH_PARAMS = `${CONFIG.API_BASE_URL}?q=${city}&appid=${CONFIG.API_KEY}&units=metric&lang=ru`
import { Api } from './api/api'
const weatherApi = new Api(API_URL_WITH_PARAMS)

import { renderCurrentWeather } from './render/renderCurrentWeather'
const data = await weatherApi.getData()
renderCurrentWeather(data)

import { renderHoursWeather } from './render/renderHoursWeather'
renderHoursWeather(data)

import { renderDaysWeather } from './render/renderDaysWeather'
renderDaysWeather(data)

import { renderTimeOfDayIcon } from './modules/renderTimeOfDayIcon'
renderTimeOfDayIcon(data)

