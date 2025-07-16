import './types/response'
import './assets/css/main.css'
import { ModalInit } from './modules/modal'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { Modal } from './components/Modal'

class App {
  root: HTMLElement
  constructor() {
    this.root = document.querySelector('[data-app]') as HTMLElement
  }

  async init() {
    this.root.append(new Header().render())
    this.root.append(await new HomePage().render())
    this.root.append(new Modal().render())

    const modal = new ModalInit(
      '[data-settings-modal]',
      '[data-open-settings-modal]',
      '[data-close-settings-modal]',
      'settings-window--active',
      'no-scroll',
    )
    modal.init()
  }
}

new App().init()
