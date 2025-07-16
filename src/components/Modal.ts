import { Component } from './ui/Component'

export class Modal extends Component {
  constructor() {
    super('div', 'settings-window', 'data-settings-modal')
  }

  private createElement(): void {
    this.element.innerHTML = `
      <div class="settings-window__content">
        <h2 class="settings-window__title title">
          Настройте все на свой вкус!
        </h2>
        <div class="settings-window__theme">
          <h3>Выберите тему:</h3>
          <div class="settings-window__theme-switcher">
            <button class="settings-window__theme-switcher-btn">Светлая</button>
            <button class="settings-window__theme-switcher-btn">Темная</button>
            <button class="settings-window__theme-switcher-btn">
              Светлая (Высокий контраст)
            </button>
            <button class="settings-window__theme-switcher-btn">
              Темная (Высокий контраст)
            </button>
          </div>
        </div>
        <div class="settings-window__language">
          <h3>Выберите язык:</h3>
          <p>пока нема, но вы держитесь</p>
        </div>
        <button class="close-settings" data-close-settings-modal>
          <svg
            viewBox="0 -0.5 21 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>close [#1511]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke-width="1" fill-rule="evenodd">
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-419.000000, -240.000000)"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <polygon
                      id="close-[#1511]"
                      points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
          `
  }

  public render(): HTMLElement {
    this.createElement()
    return this.element
  }
}
