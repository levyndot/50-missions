import { Mission, MissionType } from './mission.interface';
import { Card } from '../card.class';

export class Diff2LeftEqDiff2Right extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'L\'écart entre les 2 cartes d\'un côté est égal à celui des 2 cartes de l\'autre côté (ex: 7 - 3 = 2 - 6)',
      [ 'card-5', '-', 'card-1', '=', 'card-3', '-', 'card-7' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return Math.abs(card1.value - card2.value) === Math.abs(card3.value - card4.value);
  }
}
