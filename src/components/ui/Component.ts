export abstract class Component {
  protected element: HTMLElement

  constructor(tagName: keyof HTMLElementTagNameMap, className: string) {
    this.element = document.createElement(tagName)
    this.element.className = className
  }

  public abstract render(): HTMLElement
}
