import { Mission, MissionType, MissionView } from '../mission.interface';
import { Card } from '../card.class';

export class Exact2DiffValues extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Il y a exactement 2 valeurs présentes (ex: 5 1 1 5)',
      new MissionView(['card-2', 'card-6', 'card-6', 'card-6'])
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    const num: number[] = [];
    num.push(card1.value);
    if (!num.includes(card2.value)) num.push(card2.value);
    if (!num.includes(card3.value)) num.push(card3.value);
    if (!num.includes(card4.value)) num.push(card4.value);
    return num.length === 2;
  }
}
