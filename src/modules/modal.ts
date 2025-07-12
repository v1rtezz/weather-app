class Modal {
  private modal: HTMLElement;
  private modalClassActive: string;
  private openBtn: HTMLElement;
  private closeBtn: HTMLElement;
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
    document.body.addEventListener('keydown', (key) => {      
      if (key.code === 'Escape' || key.code === 'Backspace') {
        this.toggle()
      }
    });
  }

  toggle() {
    console.log(this.modal.classList.toggle(this.modalClassActive));
  }
}

const settingsModal = new Modal(
  '[data-settings-modal]',
  '[data-open-settings-modal]',
  '[data-close-settings-modal]',
  'settings-window--active',
);

settingsModal.init();
