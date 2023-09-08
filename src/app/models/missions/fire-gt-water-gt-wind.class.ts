import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class FireGtWaterGtWind extends Mission {
  constructor() {
    super(
      MissionType.Common,
      "La somme des feux est supérieure à celle des eaux qui est supérieure à celle des vents (ex: 12>5>1)",
      [ 'fire', 'sup', 'water', 'sup', 'wind' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    let fireValue = 0;
    let waterValue = 0;
    let windValue = 0;

    fireValue += this.getValue(card1, CardSymbol.fire);
    waterValue += this.getValue(card1, CardSymbol.water);
    windValue += this.getValue(card1, CardSymbol.wind);
    fireValue += this.getValue(card2, CardSymbol.fire);
    waterValue += this.getValue(card2, CardSymbol.water);
    windValue += this.getValue(card2, CardSymbol.wind);
    fireValue += this.getValue(card3, CardSymbol.fire);
    waterValue += this.getValue(card3, CardSymbol.water);
    windValue += this.getValue(card3, CardSymbol.wind);
    fireValue += this.getValue(card4, CardSymbol.fire);
    waterValue += this.getValue(card4, CardSymbol.water);
    windValue += this.getValue(card4, CardSymbol.wind);

    return (fireValue > waterValue && waterValue > windValue);
  }

  private getValue(card: Card, symbol: CardSymbol) : number {
    if(card.symbol === symbol) {
      return card.value;
    } else {
      return 0;
    }
  }
}
