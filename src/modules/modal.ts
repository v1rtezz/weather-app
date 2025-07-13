export class Modal {
  private modal: HTMLElement;
  private modalClassActive: string;
  private openBtn: HTMLElement;
  private closeBtn: HTMLElement;
  private body = document.body;
  constructor(
    modalSelector: string,
    openBtnSelector: string,
    closeBtnSelector: string,
    modalClassActive: string,
  ) {
    const modal = document.querySelector(modalSelector);
    this.modalClassActive = modalClassActive;
    const openBtn = document.querySelector(openBtnSelector);
    const closeBtn = document.querySelector(closeBtnSelector);

    if (!modal || !openBtn || !closeBtn) {
      throw new Error('Modal: один из селекторов не нашёл элемент в DOM');
    }

    this.modal = modal as HTMLElement;
    this.openBtn = openBtn as HTMLElement;
    this.closeBtn = closeBtn as HTMLElement;
  }

  init() {
    this.openBtn.addEventListener('click', () => this.toggle());
    this.closeBtn.addEventListener('click', () => this.toggle());
    this.body.addEventListener('keydown', (key) => {
      if (key.code === 'Escape' || key.code === 'Backspace') {
        this.toggle();
      }
    });
  }

  toggle() {
    this.modal.classList.toggle(this.modalClassActive);
    this.body.classList.toggle('no-scroll')
  }
}
