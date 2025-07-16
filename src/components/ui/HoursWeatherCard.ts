import { Component } from './Component'
import { formatUnixTimeToHHMM } from '../../utils/formatUnixTime'
import type { IForecastSnapshot } from '../../types/response'

export class HoursWeatherCard extends Component {
  constructor(public snapshot: IForecastSnapshot) {
    super('div', 'hours-forecast-card forecast-card')
  }

  private async createElement(): Promise<void> {
    this.element.innerHTML = `
      <div>
        <h3 class="hours-forecast-title forecast-card-title">${formatUnixTimeToHHMM(this.snapshot.dt)}</h3>
        <div class="hours-forecast-card-deg forecast-card-deg">
          ${Math.ceil(this.snapshot.main.temp)}&deg;C
        </div>
      </div>
      <img src="https://openweathermap.org/img/wn/${this.snapshot.weather[0].icon}@2x.png" alt="" />
    `
  }

  public render(): HTMLElement {
    this.createElement()
    return this.element
  }
}
