import type { IResponseItem } from '../types/response'

export const getHoursForDay = (list: IResponseItem[], day: string) => {
  return list.filter((item) => {
    const itemDate = new Date(Number(item.dt) * 1000)
    const weekDay = itemDate
      .toLocaleDateString('en-US', { weekday: 'long' })
      .toLowerCase()
    return weekDay === day.toLowerCase()
  })
}
