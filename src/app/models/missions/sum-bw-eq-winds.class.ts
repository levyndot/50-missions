import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class SumBwEqWinds extends Mission {
  constructor() {
    super(
      MissionType.Common,
      "La somme des vents est égale à la somme des éclairs et de l'eau",
      [ 'wind', '=', 'bolt', '+', 'water' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    let bolt = 0;
    let wind = 0;
    let water = 0;

    bolt += card1.symbol === CardSymbol.bolt ? card1.value : 0;
    bolt += card2.symbol === CardSymbol.bolt ? card2.value : 0;
    bolt += card3.symbol === CardSymbol.bolt ? card3.value : 0;
    bolt += card4.symbol === CardSymbol.bolt ? card4.value : 0;

    wind += card1.symbol === CardSymbol.wind ? card1.value : 0;
    wind += card2.symbol === CardSymbol.wind ? card2.value : 0;
    wind += card3.symbol === CardSymbol.wind ? card3.value : 0;
    wind += card4.symbol === CardSymbol.wind ? card4.value : 0;

    water += card1.symbol === CardSymbol.water ? card1.value : 0;
    water += card2.symbol === CardSymbol.water ? card2.value : 0;
    water += card3.symbol === CardSymbol.water ? card3.value : 0;
    water += card4.symbol === CardSymbol.water ? card4.value : 0;

    return wind === bolt + water;
  }
}
