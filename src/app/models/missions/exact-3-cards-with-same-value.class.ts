import { Mission, MissionType } from './mission.interface';
import {Card, CardSymbol} from '../card.class';

export class Exact3CardsWithSameValue extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Exactement 3 cartes ont la même valeurs (ex: 2 2 1 2)',
      [
        'card-5',
        'card-5',
        'card-5',
      ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    const values = new Map<number, number>();

    values.set(card1.value, 1);
    if(values.has(card2.value)) {
      values.set(card2.value, values.get(card2.value)! + 1);
    } else {
      values.set(card2.value, 1);
    }
    if(values.has(card3.value)) {
      values.set(card3.value, values.get(card3.value)! + 1);
    } else {
      values.set(card3.value, 1);
    }
    if(values.has(card4.value)) {
      values.set(card4.value, values.get(card4.value)! + 1);
    } else {
      values.set(card4.value, 1);
    }

    let valid = false;
    values.forEach((value, key) => {
      if (!valid && value === 3) {
        valid = true;
      }
    });

    return valid;
  }
}
