import {Mission, MissionType} from './mission.interface';
import {Card, CardSymbol} from '../card.class';

export class FireAtEnds extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Exactement 2 cartes sont du feu et sont séparées par 2 cartes',
      [
        'fire-card',
        'link',
        'empty-card',
        'link',
        'empty-card',
        'link',
        'fire-card',
      ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return card1.symbol === CardSymbol.fire && card2.symbol !== CardSymbol.fire && card3.symbol !== CardSymbol.fire && card4.symbol === CardSymbol.fire;
  }
}
