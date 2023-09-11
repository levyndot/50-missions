import { Mission, MissionType } from './mission.interface';
import {Card, CardSymbol} from '../card.class';

export class Exact2Symbols extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Il y a 2 paires de sympbole différents (ex: éclair feu feu éclair)',
      [
        'wind-card',
        'fire-card',
        'wind-card',
        'fire-card',
      ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    const symbols: CardSymbol[] = [];

    symbols.push(card1.symbol);
    if(!symbols.includes(card2.symbol)) {
      symbols.push(card2.symbol);
    }
    if(!symbols.includes(card3.symbol)) {
      symbols.push(card3.symbol);
    }
    if(!symbols.includes(card4.symbol)) {
      symbols.push(card4.symbol);
    }

    return symbols.length == 2;
  }
}
