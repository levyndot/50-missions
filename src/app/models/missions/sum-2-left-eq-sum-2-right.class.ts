import { Mission, MissionType } from './mission.interface';
import { Card } from '../card.class';

export class Sum2LeftEqSum2Right extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'La somme entre les 2 cartes d\'un côté est égal à celle des 2 cartes de l\'autre côté (ex: 2 4 = 1 5)',
      [ 'card-6', '+', 'card-1', '=', 'card-5', '+', 'card-2' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (card1.value + card2.value) === (card3.value + card4.value);
  }
}
