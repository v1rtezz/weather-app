import type { IResponse } from '../types/response'
import { renderHoursWeather } from '../render/renderHoursWeather'
import { renderCurrentWeather } from '../render/renderCurrentWeather'
import { renderDaysWeather } from '../render/renderDaysWeather'
import { renderTimeOfDayIcon } from '../modules/renderTimeOfDayIcon'
export const renderApp = function (data: IResponse) {
  renderCurrentWeather(data)
  renderHoursWeather(data)
  renderDaysWeather(data)
  renderTimeOfDayIcon(data)
}