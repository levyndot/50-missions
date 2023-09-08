import {Mission, MissionType} from './mission.interface';
import {Card, CardSymbol} from '../card.class';

export class WindAtEnds extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Exactement 2 cartes sont du vent et sont séparées par 2 cartes',
      [
        'wind-card',
        'link',
        'empty-card',
        'link',
        'empty-card',
        'link',
        'wind-card',
      ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return card1.symbol === CardSymbol.wind && card2.symbol !== CardSymbol.wind && card3.symbol !== CardSymbol.wind && card4.symbol === CardSymbol.wind;
  }
}
