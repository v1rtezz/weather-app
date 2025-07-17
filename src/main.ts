import './types/response'
import './assets/css/main.css'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'

class App {
  root: HTMLElement
  constructor() {
    this.root = document.querySelector('[data-app]') as HTMLElement
  }

  async init() {
    this.root.append(new Header().render())
    this.root.append(await new HomePage().render())
  }
}

new App().init()
