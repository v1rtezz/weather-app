import { Component } from "./ui/Component";

export class Search extends Component {
  constructor() {
    super("section", "search");
  }

  private createElement(): void {
    this.element.innerHTML = ` <form class="search__form" data-search-form>
          <label class="hidden" for="search-input">Выберите город</label>
          <input
            name="search-input"
            type="text"
            class="search__input"
            data-search-input
            placeholder="Нью-Йорк, Соединенные штаты Америки"
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
  }

   

  public render(): HTMLElement {
    this.createElement();
    return this.element;
  }
}