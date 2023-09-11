import { Mission, MissionType } from './mission.interface';
import {Card, CardSymbol} from '../card.class';

export class ValuesIncOrDec extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Les valeurs des 4 cartes sont croissantes ou décroissantes (ex: 7 6 4 1)',
      [
        'card-1',
        'card-2',
        'card-5',
        'card-6',
      ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
        (card1.value > card2.value &&
        card2.value > card3.value &&
        card3.value > card4.value) ||
        (card1.value < card2.value &&
        card2.value < card3.value &&
        card3.value < card4.value)
    );
  }
}
