import { Mission, MissionType } from './mission.interface';
import {Card, CardSymbol} from '../card.class';

export class WindSurroundedByFire extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Une carte vent a au moins une carte feu de chaque coté (pas forcement collée)',
      [ 'fire-card', 'wind-card', 'fire-card' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (card1.symbol === CardSymbol.fire && card2.symbol === CardSymbol.wind && (card3.symbol === CardSymbol.fire || card4.symbol === CardSymbol.fire)) ||
        ((card1.symbol === CardSymbol.fire || card2.symbol === CardSymbol.fire) && card3.symbol === CardSymbol.wind && card4.symbol === CardSymbol.fire);
  }
}
