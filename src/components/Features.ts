import { Component } from './ui/Component'
import { FeaturesCard } from './ui/FeaturesCard'
import { CONFIG } from "../config"
import { getFavorites } from '../utils/features'

export class Features extends Component {
  public featuresList: string[] = getFavorites()
  constructor() {
    super('section', 'features', 'data-features')
    this.featuresList = getFavorites() 
    this.createElement()               
  }

  private createElement(): void {
    this.element.innerHTML = 
    `
      <h2 class="features__title title">Избранные города</h2>
      <div class="features__cards" data-features-cards></div>
    `

    const cardsWrapper = this.element.querySelector('[data-features-cards]')
    if (!cardsWrapper) return

    this.featuresList.forEach((city) => {
      const card = new FeaturesCard(city)
      const cardEl = card.render()
      cardEl.addEventListener('click', () => {
        console.log(`Выбран город: ${city}`)
      })
      cardsWrapper.append(cardEl)
    })
  }


  public render(): HTMLElement {
  this.createElement()
  return this.element
}
}
