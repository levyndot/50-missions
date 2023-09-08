import {Mission, MissionType} from './mission.interface';
import {Card, CardSymbol} from '../card.class';

export class BoltAtEnds extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Exactement 2 cartes sont des éclairs et sont séparées par 2 cartes',
      [
        'bold-card',
        'link',
        'empty-card',
        'link',
        'empty-card',
        'link',
        'bold-card',
      ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return card1.symbol === CardSymbol.bolt && card2.symbol !== CardSymbol.bolt && card3.symbol !== CardSymbol.bolt && card4.symbol === CardSymbol.bolt;
  }
}
