import { Mission, MissionType } from './mission.interface';
import {Card, CardSymbol} from '../card.class';

export class WaterSurroundedByBolt extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Une carte eau a au moins une carte éclair de chaque coté (pas forcement collée)',
      [ 'bolt-card', 'water-card', 'bolt-card' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (card1.symbol === CardSymbol.bolt && card2.symbol === CardSymbol.water && (card3.symbol === CardSymbol.bolt || card4.symbol === CardSymbol.bolt)) ||
        ((card1.symbol === CardSymbol.bolt || card2.symbol === CardSymbol.bolt) && card3.symbol === CardSymbol.water && card4.symbol === CardSymbol.bolt);
  }
}
