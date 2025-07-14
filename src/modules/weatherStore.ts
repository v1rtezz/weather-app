import type { IResponse } from '../types/response'

export let data: IResponse | null = null
export const setData = (newData: IResponse) => {
  data = newData
}
