import { Mission, MissionType } from './mission.interface';
import { Card } from '../card.class';

export class Sum3CardsSbsEq9 extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'La somme de 3 cartes qui se touchent est égale à 9',
      [ '3-cards-sbs', '=', '9' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
      card1.value + card2.value + card3.value === 9 ||
      card2.value + card3.value + card4.value === 9
    );
  }
}
