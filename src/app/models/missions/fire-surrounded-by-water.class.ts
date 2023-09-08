import { Mission, MissionType } from './mission.interface';
import {Card, CardSymbol} from '../card.class';

export class FireSurroundedByWater extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Une carte feu a au moins une carte eau de chaque coté (pas forcement collée)',
      [ 'water-card', 'fire-card', 'water-card' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (card1.symbol === CardSymbol.water && card2.symbol === CardSymbol.fire && (card3.symbol === CardSymbol.water || card4.symbol === CardSymbol.water)) ||
        ((card1.symbol === CardSymbol.water || card2.symbol === CardSymbol.water) && card3.symbol === CardSymbol.fire && card4.symbol === CardSymbol.water);
  }
}
