import { Component } from './Component'
import type { IForecastSnapshot } from '../../types/response'

export class DaysWeatherCard extends Component {
  constructor(
    public snapshot: IForecastSnapshot,
    private selectedDt?: number,
  ) {
    super('button', 'days-forecast-card forecast-card')
  }

  private async createElement(): Promise<void> {
    const date = new Date(this.snapshot.dt * 1000)
    const day = date
      .toLocaleDateString('ru-RU', { weekday: 'short' })
      .toUpperCase()
    const dayEn = date
      .toLocaleDateString('en-US', { weekday: 'long' })
      .toLowerCase()

    this.element.innerHTML = `
      <div>
        <h3 class="days-forecast-title forecast-card-title">${day}</h3>
        <div class="days-forecast-card-deg forecast-card-deg">${Math.ceil(this.snapshot.main.temp)}&deg;C</div>
      </div>
      <img src="https://openweathermap.org/img/wn/${this.snapshot.weather[0].icon}@2x.png" alt="" />         
    `
    if (this.selectedDt === this.snapshot.dt) {
      this.element.classList.add('days-forecast-card--active')
    }
  }

  public render(): HTMLElement {
    this.createElement()
    return this.element
  }
}
