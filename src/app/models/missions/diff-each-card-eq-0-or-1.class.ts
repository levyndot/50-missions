import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class DiffEachCardEq0Or1 extends Mission {
  constructor() {
    super(
      MissionType.Common,
      "L'écart entre 2 cartes qui se touchent doit être de 0 ou de 1 (ex: 7665)",
      [ 'card-2', 'link', 'card-2', 'link', 'card-3', 'link', 'card-4' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
        (Math.abs(card1.value - card2.value) === 0 || Math.abs(card1.value - card2.value) === 1) &&
        (Math.abs(card2.value - card3.value) === 0 || Math.abs(card2.value - card3.value) === 1) &&
        (Math.abs(card3.value - card4.value) === 0 || Math.abs(card3.value - card4.value) === 1)
    );
  }
}
