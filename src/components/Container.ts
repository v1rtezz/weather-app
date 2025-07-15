import { Component } from "./ui/Component";

export class Container extends Component{
  constructor(tagName: keyof HTMLElementTagNameMap, className: string) {
    super(tagName, className)
  }
  public render(): HTMLElement {
    return this.element
  }
}