export interface IResponse {
  cod: string
  message: number
  cnt: number
  list: {
    dt: number
    main: {
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
    weather: {
      id: number
      main: string
      description: string
      icon: string
    }[]
    clouds: {
      all: number
    }
    wind: {
      speed: number
      deg: number
      gust: number
    }
    visibility: number
    pop: number
    sys: {
      pod: string
    }
    dt_txt: string
  }[]
  city: {
    id: number
    name: string
    country: string
    sunrise: number
    sunset: number
  }
}
