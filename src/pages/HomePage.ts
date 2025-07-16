import { Page } from '../components/ui/Page'
import { Search } from '../components/Search'
import { CurrentWeather } from '../components/ui/CurrentWeather'
import type { IWeatherResponse } from '../types/response'
import { WeatherApi } from '../api/weather'
import { ApiError } from '../api/error'
import { CurrentHoursWeather } from '../components/HoursWeather'

export class HomePage extends Page {
  protected data: IWeatherResponse | null = null
  constructor() {
    super('main')
  }
  private async getDataFromLocalstorage(): Promise<void> {
    try {
      const city = localStorage.getItem('currentCity')
      if (!city) return

      const data = await WeatherApi.get(city)
      if (!data) return

      this.data = data
    } catch (error) {
      if (error instanceof ApiError) {
        console.error(error.message)
      }
    }
  }

  protected async createPage(): Promise<void> {
    const container = this.element.querySelector('.container') as HTMLElement
    this.appendSearch(container)
    await this.getDataFromLocalstorage()
    if (!this.data) {
      return
    }
    this.appendCurrentWeather(container)
    this.appendCurrentHoursWeather(container)
  }

  private updateCurrentWeather(container: HTMLElement): void {
    const oldCurrentWeather = container.querySelector('[data-current-weather]')
    const oldCurrentHoursWeather = container.querySelector(
      '[data-current-hours-weather]',
    )

    if (oldCurrentWeather) oldCurrentWeather.remove()
    if (oldCurrentHoursWeather) oldCurrentHoursWeather.remove()

    if (this.data) {
      this.appendCurrentWeather(container)
      this.appendCurrentHoursWeather(container)
    }
  }

  private appendSearch(container: HTMLElement): void {
    const search = new Search((data) => {
      this.data = data
      this.updateCurrentWeather(container)
    })

    container.append(search.render())
  }
  private async appendCurrentWeather(container: HTMLElement): Promise<void> {
    container.append(new CurrentWeather(this.data).render())
  }

  private async appendCurrentHoursWeather(
    container: HTMLElement,
  ): Promise<void> {
    container.append(new CurrentHoursWeather(this.data).render())
  }

  public async render(): Promise<HTMLElement> {
    await this.createPage()
    return this.element
  }
}
