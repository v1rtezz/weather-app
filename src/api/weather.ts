import { api } from ".";
import type { IWeatherResponse } from "../types/response";

export class WeatherApi {
  static async get(): Promise<IWeatherResponse> {
    return await api.get<IWeatherResponse>("/data/2.5/forecast?q=London&units=metric&lang=ru")
  }
}