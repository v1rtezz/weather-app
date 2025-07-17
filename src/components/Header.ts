import { Component } from './ui/Component'

export class Header extends Component {
  constructor() {
    super('header', 'header')
  }
  private createElement(): void {
    this.element.innerHTML = ` 
          <img
            class="logo"
            src="/logo.png"
            alt=""
            width="100"
            height="100"
          />
          <h1 class="header__title">
            Забудь о неожиданном&nbsp;дожде с&nbsp;Weather App!
          </h1>
          `
  }

  public render(): HTMLElement {
    this.createElement();
    return this.element;
  }
}