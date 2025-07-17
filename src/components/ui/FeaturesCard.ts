import { Component } from './Component'
import { WeatherApi } from '../../api/weather'
import type { IWeatherResponse } from '../../types/response'

export class FeaturesCard extends Component {
  constructor(private city: string) {
    super('button', 'features__card')
  }

  private async createElement(): Promise<void> {
    const data: IWeatherResponse | null = await WeatherApi.get(this.city)
    const weather = data.list[0]

    const rainChanceItem = data.list.find((item) => item.pop && item.pop > 0)
    const popPercent = rainChanceItem
      ? `${Math.ceil(rainChanceItem.pop * 100)}%`
      : 'Нет данных'

    this.element.innerHTML = `
      <div class="features__card-left">
              <h3 class="features__card-title">${this.city}</h3>
              <p class="features__card-deg">${Math.ceil(weather.main.temp)}&deg;</p>
              <p class="features__card-rain-chance">
  Вероятность дождя: ${popPercent}
                </p>
            </div>
            <div class="features__card-right">
                   <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="" class="features__card-img" />         

            </div>
    `
  }
  public render(): HTMLElement {
    this.createElement()
    return this.element
  }
}
