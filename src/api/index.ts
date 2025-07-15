import { ApiError } from './error'
import { CONFIG } from '../config'
import type { ApiOptions } from '../types/api'

export class Api {
  private baseUrl: string
  private defaultHeaders: HeadersInit

  constructor({ baseUrl, headers }: ApiOptions) {
    this.baseUrl = baseUrl
    this.defaultHeaders = headers || {}
  }

  private async request<ResponseData = unknown>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<ResponseData> {
    const url = this.baseUrl + endpoint
    const headers = {
      ...this.defaultHeaders,
      ...(options.headers || {}),
    }

    const response = await fetch(url, {
      ...options,
      headers,
    })
    const data: unknown = await response.json()

    if (!response.ok) {
      throw new ApiError(response.status, response.statusText, data, response)
    }

    return data as ResponseData
  }

  public get<ResponseData = unknown>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<ResponseData> {
    return this.request<ResponseData>(endpoint, {
      ...options,
      method: 'GET',
    })
  }
}

export const api = new Api({
  baseUrl: CONFIG.API_URL,
})