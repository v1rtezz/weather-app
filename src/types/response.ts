export interface IWeatherMetrics {
  temp: number
  feels_like: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
  temp_min: number
  temp_max: number
  pressure: number
}

export interface IWeatherInfo {
  id: number
  main: string
  description: string
  icon: string
}

export interface IWindInfo {
  speed: number
  deg: number
  gust: number
}

export interface IForecastSnapshot {
  dt: number
  main: IWeatherMetrics
  weather: IWeatherInfo[]
  clouds: {
    all: number
  }
  visibility: number
  pop: number
  sys: {
    pod: string
  }
  dt_txt: string
}

export interface IResponceCity {
  id: number
    name: string
    country: string
    sunrise: number
    sunset: number
}

export interface IWeatherResponse {
  cod: string
  message: number
  cnt: number
  list: IForecastSnapshot[]
  city: IResponceCity
}
