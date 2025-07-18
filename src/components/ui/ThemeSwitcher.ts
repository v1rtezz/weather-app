import { Component } from './Component'

export class ThemeSwitcher extends Component {
  constructor() {
    super('div', 'switch-wrapper', 'data-theme-switcher')
  }

  private createElement(): void {
    this.element.innerHTML = `
<label class="switch">
  <span class="sun">
    <!-- SVG солнца -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="#ffd43b">
        <circle r="5" cy="12" cx="12"></circle>
        <path d="M21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM4 13H3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM17.66 7.34a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.75.29zM5.64 19.36a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.24zM12 5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zM12 22a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zM6.34 7.34a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29zM18.36 19.36a1 1 0 0 1-.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.24z"></path>
      </g>
    </svg>
  </span>
  <span class="moon">
    <!-- SVG луны -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path d="M223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
    </svg>
  </span>
  <input type="checkbox" class="input">
  <span class="slider"></span>
</label>
    `

    const input = this.element.querySelector<HTMLInputElement>('input')
    const body = document.body

    const setTheme = (theme: 'light' | 'dark') => {
      body.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
      input!.checked = theme === 'dark'
    }

    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const defaultTheme = savedTheme ?? 'light'
    setTheme(defaultTheme)

    input?.addEventListener('change', () => {
      const newTheme = input.checked ? 'dark' : 'light'
      setTheme(newTheme)
    })
  }

  public render(): HTMLElement {
    this.createElement()
    return this.element
  }
}
