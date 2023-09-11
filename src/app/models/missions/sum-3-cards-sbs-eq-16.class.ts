import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class Sum3CardsSbsEq16 extends Mission {
  constructor() {
    super(
      MissionType.Common,
      "La somme de 3 cartes qui se touchent est égale à 16",
      [ '3-cards-sbs', '=', '16' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
        card1.value + card2.value + card3.value === 16 ||
        card2.value + card3.value + card4.value === 16
    );
  }
}
