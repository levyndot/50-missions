import { Mission, MissionType } from './mission.interface';
import { Card } from '../card.class';

export class Sum2LeftEqTimes2Right extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'La somme des 2 cartes d\'un côté est égal au produit des 2 cartes de l\'autre côté (ex: 6 + 4 = 2 x 5)',
      [ 'card-5', '+', 'card-1', '=', 'card-2', 'x', 'card-3' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return ((card1.value + card2.value) === (card3.value * card4.value)) ||
        ((card1.value * card2.value) === (card3.value + card4.value)) ;
  }
}
