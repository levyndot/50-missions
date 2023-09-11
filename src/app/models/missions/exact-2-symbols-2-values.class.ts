import { Mission, MissionType } from './mission.interface';
import {Card, CardSymbol} from '../card.class';

export class Exact2Symbols2Values extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Exactement 2 symboles et 2 valeurs sont présents',
      [
        'card-6-bolt',
        'card-2-wind',
        'card-2-bolt',
        'card-2-wind',
      ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    const values: number[] = [];
    const symbols: CardSymbol[] = [];

    values.push(card1.value);
    symbols.push(card1.symbol);
    if(!values.includes(card2.value)) {
      values.push(card2.value);
    }
    if(!symbols.includes(card2.symbol)) {
      symbols.push(card2.symbol);
    }
    if(!values.includes(card3.value)) {
      values.push(card3.value);
    }
    if(!symbols.includes(card3.symbol)) {
      symbols.push(card3.symbol);
    }
    if(!values.includes(card4.value)) {
      values.push(card4.value);
    }
    if(!symbols.includes(card4.symbol)) {
      symbols.push(card4.symbol);
    }
    return values.length === 2 && symbols.length == 2;
  }
}
