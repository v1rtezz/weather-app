import { getForecastForDay } from './getForecastForDay'
import { renderCurrentWeather } from '../render/renderCurrentWeather'
import { data } from './weatherStore'
import { renderDaysWeather } from '../render/renderDaysWeather'
import { renderTimeOfDayIcon } from './renderTimeOfDayIcon'
import { renderHoursWeather } from '../render/renderHoursWeather'


export const showWeatherForDay = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  const dayElement = target.closest('[data-day]') as HTMLElement | null

  if (!dayElement || !data) return

  const day = dayElement.dataset.day
  if (!day) return

  const forecasts = getForecastForDay(data, day)

  if (forecasts.length) {
    renderCurrentWeather(forecasts, data.city)
    renderHoursWeather(data)
    renderDaysWeather(data)
    renderTimeOfDayIcon(data)
  }
  console.log(data);
  
}
