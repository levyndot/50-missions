import { Mission, MissionType } from './mission.interface';
import { Card } from '../card.class';

export class Exact2CardsLt4 extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Exactement 2 cartes sont inférieures à 4 et elles sont espacées d\'une seule carte',
      [ 'lt4-cards-sbs' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
        (card1.value < 4 && card2.value >= 4 && card3.value < 4 && card4.value >= 4) ||
        (card1.value >= 4 && card2.value < 4 && card3.value >= 4 && card4.value < 4)
    );
  }
}
