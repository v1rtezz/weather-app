import type { IResponse } from '../types/response'
import { renderHoursWeather } from '../render/renderHoursWeather'
import { renderCurrentWeather } from '../render/renderCurrentWeather'
import { renderDaysWeather } from '../render/renderDaysWeather'
import { renderTimeOfDayIcon } from '../modules/renderTimeOfDayIcon'
import { setData } from './weatherStore'
export const renderApp = function (data: IResponse) {
  setData(data)
  renderCurrentWeather(data.list, data.city)
  renderHoursWeather(data)
  renderDaysWeather(data)
  renderTimeOfDayIcon(data)
}
