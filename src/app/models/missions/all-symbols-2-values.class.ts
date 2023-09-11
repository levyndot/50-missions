import { Mission, MissionType } from './mission.interface';
import {Card, CardSymbol} from '../card.class';

export class AllSymbols2Values extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Chaque carte a un symbole différent et il n\'y a que 2 valeurs différentes (ex: 5 5 5 3)',
      [
        'card-4-water',
        'card-3-wind',
        'card-4-bolt',
        'card-3-fire',
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
    return values.length === 2 && symbols.length == 4;
  }
}
