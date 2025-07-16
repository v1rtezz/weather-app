import { Page } from '../components/ui/Page'
import { Search } from '../components/Search'
import { CurrentWeather } from '../components/CurrentWeather'
import type { IWeatherResponse } from '../types/response'
import { WeatherApi } from '../api/weather'
import { ApiError } from '../api/error'


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
  }

  private updateCurrentWeather(container: HTMLElement): void {
    const old = container.querySelector('.current')
    if (old) old.remove()

    if (this.data) {
      container.append(new CurrentWeather(this.data).render())
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

  public async render(): Promise<HTMLElement> {
    await this.createPage()
    return this.element
  }
}
