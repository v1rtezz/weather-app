import { Component } from './ui/Component'
import type { IWeatherResponse } from '../types/response'
import { HoursWeatherCard } from './ui/HoursWeatherCard'

export class CurrentHoursWeather extends Component {
  constructor(public data: IWeatherResponse | null = null) {
    super('section', 'hours-forecast', 'data-current-hours-weather')
  }

  private async createElement(): Promise<void> {
    if (!this.data) {
      this.element.innerHTML = '<p>Ошибка загрузки данных</p>'
      return
    }

    this.element.innerHTML = `
        <h2 class="hours-forecast__title title">Погода по часам</h2>
        <div class="forecast-cards" data-hours-forecast-cards-wrapper></div>
  `

    const cardsWrapper = this.element.querySelector(
      '[data-hours-forecast-cards-wrapper]',
    )
    if (!cardsWrapper) return

    const hoursData = this.data.list.slice(0, 5)
    hoursData.forEach((item) => {
      const card = new HoursWeatherCard(item)
      cardsWrapper.append(card.render())
    })
  }

  public render(): HTMLElement {
    this.createElement()
    return this.element
  }
}
