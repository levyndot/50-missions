import {Mission, MissionType} from './mission.interface';
import {Card, CardSymbol} from '../card.class';

export class WaterAtEnds extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Exactement 2 cartes sont de l\'eau et sont séparées par 2 cartes',
      [
        'water-card',
        'link',
        'empty-card',
        'link',
        'empty-card',
        'link',
        'water-card',
      ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return card1.symbol === CardSymbol.water && card2.symbol !== CardSymbol.water && card3.symbol !== CardSymbol.water && card4.symbol === CardSymbol.water;
  }
}
