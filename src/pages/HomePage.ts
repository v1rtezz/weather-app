import { Page } from "../components/ui/Page";
import { Search } from "../components/Search";
import { CurrentWeather } from "../components/CurrentWeather";

export class HomePage extends Page {
  constructor() {
    super("home")
  }

  protected async createPage(): Promise<void> {
    const container = this.element.querySelector(".container") as HTMLElement;
    this.appendSearch(container)
    this.appendCurrentWeather(container)
  }

  private appendSearch(container: HTMLElement): void {
    container.append(new Search().render());
  }
  private appendCurrentWeather(container: HTMLElement): void {
    container.append(new CurrentWeather().render());
  }

  public async render(): Promise<HTMLElement> {
    await this.createPage();
    return this.element;
  }

}