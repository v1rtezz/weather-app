import { Page } from '../components/ui/Page'
import { Search } from '../components/Search'
import { CurrentWeather } from '../components/CurrentWeather'
import type { IWeatherResponse } from '../types/response'
import { WeatherApi } from '../api/weather'
import { ApiError } from '../api/error'

export class HomePage extends Page {
  protected data: IWeatherResponse | null = null 
  constructor() {
    super('home')
  }

  private async getData(): Promise<void> {
    try {
      const data = await WeatherApi.get()
      console.log(data)
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
    await this.getData()
    if (!this.data) {
      this.element.innerHTML = '<p>Ошибка загрузки </p>'
      return
    }
    this.appendCurrentWeather(container)
  }

  private appendSearch(container: HTMLElement): void {
    container.append(new Search().render())
  }
  private async appendCurrentWeather(container: HTMLElement): Promise<void> {
    container.append(new CurrentWeather(this.data).render())
  }

  public async render(): Promise<HTMLElement> {
    await this.createPage()
    return this.element
  }
}
