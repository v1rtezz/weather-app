export abstract class Component {
  protected element: HTMLElement

  constructor(tagName: keyof HTMLElementTagNameMap, className: string, dataName?: string) {
    this.element = document.createElement(tagName)
    this.element.className = className
    if (dataName) {
      this.element.setAttribute(dataName, '')
    }
  }

  public abstract render(): HTMLElement
}
