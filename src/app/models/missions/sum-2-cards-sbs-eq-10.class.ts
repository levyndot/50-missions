import { Mission, MissionType } from './mission.interface';
import { Card } from '../card.class';

export class Sum2CardsSbsEq10 extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'La somme de 2 cartes qui se touchent est égale à 10',
      [ '2-cards-sbs', '=', '10' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
      card1.value + card2.value === 10 ||
      card2.value + card3.value === 10 ||
      card3.value + card4.value === 10
    );
  }
}
