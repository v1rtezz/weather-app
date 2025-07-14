import type { IResponse } from '../types/response'

export const getForecastForDay = (data: IResponse, day: string) => {
  return (data.list || []).filter((item) => {
    const itemDate = new Date(Number(item.dt) * 1000)
    const weekDay = itemDate
      .toLocaleDateString('en-US', { weekday: 'long' })
      .toLowerCase()
      console.log(weekDay);
      
    return weekDay === day.toLowerCase()
  })
}
