import { Mission, MissionType } from './mission.interface';
import { Card } from '../card.class';

export class SameSymbolDifferentValues extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Les 4 cartes sont de même symbole mais de valeurs différentes',
      [
        'card-3-wind',
        'card-7-wind',
        'card-2-wind',
        'card-6-wind',
      ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    const values: number[] = [];

    let valid = (
        card1.symbol === card2.symbol &&
        card2.symbol === card3.symbol &&
        card3.symbol === card4.symbol
    );
    values.push(card1.value);
    if(!values.includes(card2.value)) {
      values.push(card2.value);
    } else {
      valid = false;
    }
    if(!values.includes(card3.value)) {
      values.push(card3.value);
    } else {
      valid = false;
    }
    if(!values.includes(card4.value)) {
      values.push(card4.value);
    } else {
      valid = false;
    }
    return valid;
  }
}
