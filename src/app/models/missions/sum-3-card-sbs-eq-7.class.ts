import { Mission, MissionType, MissionView } from '../mission.interface';
import { Card } from '../card.class';

export class Sum3CardSbsEq7 extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'La somme de 3 cartes qui se touchent est égale à 7',
      new MissionView(['3-cards-sbs', '=', '7'])
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
      card1.value + card2.value + card3.value === 7 ||
      card2.value + card3.value + card4.value === 7
    );
  }
}
