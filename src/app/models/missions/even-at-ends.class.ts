import { Mission, MissionType } from './mission.interface';
import { Card } from '../card.class';

export class EvenAtEnds extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Exactement 2 cartes sont paires et sont séparées par 2 cartes',
      [
        'card-odd',
        'link',
        'empty-card',
        'link',
        'empty-card',
        'link',
        'empty-odd',
      ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return card1.value % 2 === 0 && card2.value % 2 !== 0 && card3.value % 2 !== 0 && card4.value % 2 === 0;
  }
}
