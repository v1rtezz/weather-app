export class ModalInit {
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
