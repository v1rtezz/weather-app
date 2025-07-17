import { Component } from './ui/Component'
import type { IWeatherResponse } from '../types/response'
import { DaysWeatherCard } from './ui/DaysWeatnerCard'

export class CurrentDaysWeather extends Component {
  constructor(
    public data: IWeatherResponse | null = null,
    private onDayClick?: (dt: number) => void,
    private selectedDt?: number,
  ) {
    super('section', 'days-forecast', 'data-current-days-weather')
  }

  private async createElement(): Promise<void> {
    if (!this.data) {
      this.element.innerHTML = '<p>Ошибка загрузки данных</p>'
      return
    }

    this.element.innerHTML = `
        <h2 class="days-forecast__title title">Погода по дням</h2>
       <div class="days-forecast-cards forecast-cards" data-days-forecast-cards></div>
  `

    const cardsWrapper = this.element.querySelector(
      '[data-days-forecast-cards]',
    )
    if (!cardsWrapper) return

    const filtered = this.data.list.filter((item) =>
      item.dt_txt.includes('12:00:00'),
    )

    filtered.forEach((element) => {
      const card =
        this.selectedDt !== undefined
          ? new DaysWeatherCard(element, this.selectedDt)
          : new DaysWeatherCard(element)
      const cardEl = card.render()
      cardEl.addEventListener('click', () => {
        if (this.onDayClick) {
          this.onDayClick(element.dt)
        }
      })
      cardsWrapper.append(cardEl)
    })
  }

  public render(): HTMLElement {
    this.createElement()
    return this.element
  }
}
