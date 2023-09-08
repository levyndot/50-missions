import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class BoltGtFireGtWater extends Mission {
  constructor() {
    super(
      MissionType.Common,
      "La somme des éclairs est supérieure à celle des feux qui est supérieure à celle des eaux (ex: 8>2>0)",
      [ 'bolt', 'sup', 'fire', 'sup', 'water' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    let boltValue = 0;
    let fireValue = 0;
    let waterValue = 0;

    fireValue += this.getValue(card1, CardSymbol.fire);
    waterValue += this.getValue(card1, CardSymbol.water);
    boltValue += this.getValue(card1, CardSymbol.bolt);
    fireValue += this.getValue(card2, CardSymbol.fire);
    waterValue += this.getValue(card2, CardSymbol.water);
    boltValue += this.getValue(card2, CardSymbol.bolt);
    fireValue += this.getValue(card3, CardSymbol.fire);
    waterValue += this.getValue(card3, CardSymbol.water);
    boltValue += this.getValue(card3, CardSymbol.bolt);
    fireValue += this.getValue(card4, CardSymbol.fire);
    waterValue += this.getValue(card4, CardSymbol.water);
    boltValue += this.getValue(card4, CardSymbol.bolt);

    return (boltValue > fireValue && fireValue > waterValue);
  }

  private getValue(card: Card, symbol: CardSymbol) : number {
    if(card.symbol === symbol) {
      return card.value;
    } else {
      return 0;
    }
  }
}
