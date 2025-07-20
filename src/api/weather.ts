import { api } from ".";
import type { IWeatherResponse } from "../types/response";

export class WeatherApi {
  static async get(city: string): Promise<IWeatherResponse> {
    const encodedCity = encodeURIComponent(city.trim())
    return await api.get<IWeatherResponse>(
      `/data/2.5/forecast?q=${encodedCity}&units=metric&lang=ru`
    )
  }
} 