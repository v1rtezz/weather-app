import { Component } from './ui/Component'
import { WeatherApi } from '../api/weather'
import type { IWeatherResponse } from '../types/response'
import { ApiError } from '../api/error'

export class Search extends Component {
  constructor(
    private onSearch: (data: IWeatherResponse) => void,
    private onError: () => void,
  ) {
    super('section', 'search')
  }

  private createElement(): void {
    this.element.innerHTML = ` <form class="search__form" data-search-form>
          <label class="hidden" for="search-input">Выберите город</label>
          <input
            name="search-input"
            type="text"
            class="search__input"
            data-search-input
            placeholder="Нью-Йорк"
            data-search-input
          />

          <button type="submit" class="search__btn">
            <svg
              width="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.1"
                  d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  fill="none"
                ></path>
                <path
                  d="M15 15L21 21"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke-width="2"
                ></path>
              </g>
            </svg>
          </button>
        </form>
        <p class="form-message" data-form-message></p>`
    const form = this.element.querySelector(
      '[data-search-form]',
    ) as HTMLFormElement
    form.addEventListener('submit', this.handleSubmit.bind(this))
  }

  private async handleSubmit(event: Event): Promise<void> {
    event.preventDefault()
    const inputElement = this.element.querySelector(
      '[data-search-input]',
    ) as HTMLInputElement
    const messageElement = this.element.querySelector(
      '[data-form-message]',
    ) as HTMLElement

    messageElement.innerHTML = ''
    const inputValue = inputElement.value.trim()
    if (inputValue.length === 0) {
      messageElement.textContent = 'Проверка на дурака прошла успешно'
      this.onError()

      return
    }

    try {
      const data = await WeatherApi.get(inputValue)
      this.onSearch(data)
      localStorage.setItem('currentCity', inputValue)
    } catch (error) {
      if (error instanceof ApiError) {
        this.onError()
        messageElement.textContent =
          'Окак, видать твоего города у нас нет, сорян. Текст ошибки:' +
          error.message
      }
    }
  }

  public render(): HTMLElement {
    this.createElement()
    return this.element
  }
}