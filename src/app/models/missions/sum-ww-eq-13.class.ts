import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class SumWwEq13 extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'La somme des eaux et des vents est égale à 13 (au moins une carte de chaque)',
      [ 'water', '+', 'wind', '=', '13' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    let count = 0;
    let hasWater = false;
    let hasWind = false;
    if (card1.symbol === CardSymbol.water || card1.symbol === CardSymbol.wind) {
      count += card1.value;
      hasWater = card1.symbol === CardSymbol.water;
      hasWind = card1.symbol === CardSymbol.wind;
    }
    if (card2.symbol === CardSymbol.water || card2.symbol === CardSymbol.wind) {
      count += card2.value;
      if (!hasWater) {
        hasWater = card2.symbol === CardSymbol.water;
      }
      if (!hasWind) {
        hasWind = card2.symbol === CardSymbol.wind;
      }
    }
    if (card3.symbol === CardSymbol.water || card3.symbol === CardSymbol.wind) {
      count += card3.value;
      if (!hasWater) {
        hasWater = card3.symbol === CardSymbol.water;
      }
      if (!hasWind) {
        hasWind = card3.symbol === CardSymbol.wind;
      }
    }
    if (card4.symbol === CardSymbol.water || card4.symbol === CardSymbol.wind) {
      count += card4.value;
      if (!hasWater) {
        hasWater = card4.symbol === CardSymbol.water;
      }
      if (!hasWind) {
        hasWind = card4.symbol === CardSymbol.wind;
      }
    }
    return count === 13 && hasWater && hasWind;
  }
}
