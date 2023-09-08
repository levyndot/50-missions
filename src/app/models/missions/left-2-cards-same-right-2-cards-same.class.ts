import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class Left2CardsSameRight2CardsSame extends Mission {
  constructor() {
    super(
      MissionType.Common,
      "La valeur des 2 cartes de gauche et des 2 cartes de droite sont identiques (ex: 7 7 4 4)",
      [ 'card1', 'card1', 'card3', 'card3' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
      card1.value === card2.value &&
      card3.value === card4.value
    );
  }
}
