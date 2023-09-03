import { Mission, MissionType, MissionView } from '../mission.interface';
import { Card } from '../card.class';

export class OddAtEnds extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Exactement 2 cartes sont impaires et sont séparées par 2 cartes',
      new MissionView([
        'card-odd',
        'link',
        'empty-card',
        'link',
        'empty-card',
        'link',
        'empty-odd',
      ])
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return card1.value % 2 !== 0 && card4.value % 2 !== 0;
  }
}
