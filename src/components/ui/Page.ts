import { Container } from "../Container";

export abstract class Page {
  protected element: HTMLElement;

  constructor (className: string) {
    this.element = document.createElement("main");
    this.element.className = className;

    const container = new Container("div", "container").render();
    this.element.append(container);
  }

  protected abstract createPage(): Promise<void>;
  public abstract render(): Promise<HTMLElement>;
}