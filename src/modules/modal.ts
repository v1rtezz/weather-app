class Modal {
  private modal: HTMLElement
  private modalClassActive: string
  private openBtn: HTMLElement
  private closeBtn: HTMLElement
  private noScroll: string
  private body = document.body
  constructor(
    modalSelector: string,
    openBtnSelector: string,
    closeBtnSelector: string,
    modalClassActive: string,
    noScroll: string,
  ) {
    this.modalClassActive = modalClassActive
    this.noScroll = noScroll
    const modal = document.querySelector(modalSelector)
    const openBtn = document.querySelector(openBtnSelector)
    const closeBtn = document.querySelector(closeBtnSelector)

    if (!modal) {
      throw new Error(
        `Modal: не найден элемент по селектору "${modalSelector}"`,
      )
    }

    if (!openBtn) {
      throw new Error(
        `Modal: не найден элемент по селектору "${openBtnSelector}"`,
      )
    }

    if (!closeBtn) {
      throw new Error(
        `Modal: не найден элемент по селектору "${closeBtnSelector}"`,
      )
    }

    if (!modal || !openBtn || !closeBtn) {
      throw new Error('Modal: один из селекторов не нашёл элемент в DOM')
    }

    this.modal = modal as HTMLElement
    this.openBtn = openBtn as HTMLElement
    this.closeBtn = closeBtn as HTMLElement
  }

  init() {
    this.openBtn.addEventListener('click', () => this.toggle())
    this.closeBtn.addEventListener('click', () => this.toggle())
    this.body.addEventListener('keydown', (key) => {
      if (key.code === 'Escape') {
        this.toggle()
      }
    })
  }

  toggle() {
    this.modal.classList.toggle(this.modalClassActive)
    this.body.classList.toggle(this.noScroll)
  }
}

export const createSettingsModal = (): Modal => {
  return new Modal(
    '[data-settings-modal]',
    '[data-open-settings-modal]',
    '[data-close-settings-modal]',
    'settings-window--active',
    'no-scroll',
  )
}
