import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class DiffEachCardEq2 extends Mission {
  constructor() {
    super(
      MissionType.Common,
      "L'écart entre 2 cartes qui se touchent doit être de 2 (ex: 6424)",
      [ 'card-1', 'link', 'card-3', 'link', 'card-5', 'link', 'card-3' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
        Math.abs(card1.value - card2.value) === 2 &&
        Math.abs(card2.value - card3.value) === 2 &&
        Math.abs(card3.value - card4.value) === 2
    );
  }
}
