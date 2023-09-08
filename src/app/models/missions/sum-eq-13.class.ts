import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class SumEq13 extends Mission {
  constructor() {
    super(
      MissionType.Common,
      "La somme des 4 cartes est égale à 13",
      [ 'sum', 'eq', '13' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (card1.value + card2.value + card3.value + card4.value) === 13;
  }
}
