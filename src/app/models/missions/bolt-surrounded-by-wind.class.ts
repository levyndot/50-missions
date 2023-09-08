import { Mission, MissionType } from './mission.interface';
import {Card, CardSymbol} from '../card.class';

export class BoltSurroundedByWind extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Une carte éclair a au moins une carte vent de chaque coté (pas forcement collée)',
      [ 'wind-card', 'bolt-card', 'wind-card' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (card1.symbol === CardSymbol.wind && card2.symbol === CardSymbol.bolt && (card3.symbol === CardSymbol.wind || card4.symbol === CardSymbol.wind)) ||
        ((card1.symbol === CardSymbol.wind || card2.symbol === CardSymbol.wind) && card3.symbol === CardSymbol.bolt && card4.symbol === CardSymbol.wind);
  }
}
