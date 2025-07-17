import { Page } from '../components/ui/Page'
import { Search } from '../components/Search'
import { CurrentWeather } from '../components/ui/CurrentWeather'
import type { IWeatherResponse } from '../types/response'
import { WeatherApi } from '../api/weather'
import { ApiError } from '../api/error'
import { CurrentHoursWeather } from '../components/HoursWeather'
import { CurrentDaysWeather } from '../components/DaysWeather'
import { Features } from '../components/Features'
import { TimeIndicator } from '../components/ui/TimeIndicator'
import { ThemeSwitcher } from '../components/ui/ThemeSwitcher'

export class HomePage extends Page {
  private CITY_KEY = 'currentCity'
  protected data: IWeatherResponse | null = null
  private selectedDt: number | null = null

  constructor() {
    super('main')
  }

  private async getDataFromLocalstorage(): Promise<void> {
    const city = localStorage.getItem(this.CITY_KEY)
    if (!city) return
    await this.fetchData(city)
  }

  private async fetchData(city: string): Promise<void> {
    try {
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
    if (!this.data) return
    this.renderFullWeather(container)
    this.appendTimeIndicator(container)
    this.appendThemeSwitcher(container)
  }

  private updateCurrentWeather(container: HTMLElement): void {
    this.clearWeather(container)
    if (this.data) {
      this.renderFullWeather(container)
    }
  }

  private appendSearch(container: HTMLElement): void {
    const search = new Search(
      (data) => {
        this.data = data
        this.updateCurrentWeather(container)
      },
      () => this.clearWeather(container),
    )
    container.append(search.render())
  }

  private renderFullWeather(container: HTMLElement): void {
    this.clearWeather(container)
    this.appendCurrentWeather(container)
    this.appendCurrentHoursWeather(container)
    this.appendCurrentDaysWeather(container)
    this.appendFeatures(container)
  }

  private clearWeather(container: HTMLElement): void {
    const selectors = [
      '[data-current-weather]',
      '[data-current-hours-weather]',
      '[data-current-days-weather]',
      '[data-features]',
      '[data-time-indicator]',
    ]
    selectors.forEach((selector) => {
      const el = container.querySelector(selector)
      if (el) el.remove()
    })
  }

  private async appendCurrentWeather(container: HTMLElement): Promise<void> {
    container.append(new CurrentWeather(this.data).render())
  }

  private async appendCurrentHoursWeather(
    container: HTMLElement,
  ): Promise<void> {
    container.append(new CurrentHoursWeather(this.data).render())
  }
  private async appendThemeSwitcher(container: HTMLElement): Promise<void> {
    container.append(new ThemeSwitcher().render())
  }

  private appendFeatures(container: HTMLElement): void {
    const features = new Features(async (city: string) => {
      localStorage.setItem(this.CITY_KEY, city)
      await this.fetchData(city)
      this.renderFullWeather(container)
    })
    container.append(features.render())
  }

  private appendTimeIndicator(container: HTMLElement): void {
    container.append(new TimeIndicator(this.data).render())
  }

  private async appendCurrentDaysWeather(
    container: HTMLElement,
  ): Promise<void> {
    const daysWeather = new CurrentDaysWeather(
      this.data,
      (dt) => {
        this.selectedDt = dt
        this.updateCurrentWeatherForDay(container, dt)
      },
      this.selectedDt ?? undefined,
    )
    container.append(daysWeather.render())
  }

  private updateCurrentWeatherForDay(container: HTMLElement, dt: number): void {
    if (!this.data) return

    const selectedDate = new Date(dt * 1000)
    const filteredList = this.data.list.filter((item) => {
      const itemDate = new Date(item.dt * 1000)
      return (
        itemDate.getFullYear() === selectedDate.getFullYear() &&
        itemDate.getMonth() === selectedDate.getMonth() &&
        itemDate.getDate() === selectedDate.getDate()
      )
    })

    if (filteredList.length === 0) return

    this.selectedDt = dt
    this.clearWeather(container)

    container.append(
      new CurrentWeather({ ...this.data, list: filteredList }).render(),
    )
    container.append(
      new CurrentHoursWeather({ ...this.data, list: filteredList }).render(),
    )
    container.append(
      new CurrentDaysWeather(
        this.data,
        (d) => this.updateCurrentWeatherForDay(container, d),
        this.selectedDt,
      ).render(),
    )
    this.appendFeatures(container)
    this.appendTimeIndicator(container)
    this.appendThemeSwitcher(container)
  }

  public async render(): Promise<HTMLElement> {
    await this.createPage()
    return this.element
  }
}
