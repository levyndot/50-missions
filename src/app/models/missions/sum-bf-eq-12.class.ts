import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class SumBFEq12 extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'La somme des éclairs et des feux est égale a 12 (au moins une carte de chaque)',
      [ 'bolt', '+', 'fire', '=', '12' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    let count = 0;
    let hasBolt = false;
    let hasFire = false;
    if (card1.symbol === CardSymbol.bolt || card1.symbol === CardSymbol.fire) {
      count += card1.value;
      hasBolt = card1.symbol === CardSymbol.bolt;
      hasFire = card1.symbol === CardSymbol.fire;
    }
    if (card2.symbol === CardSymbol.bolt || card2.symbol === CardSymbol.fire) {
      count += card2.value;
      if (!hasBolt) {
        hasBolt = card2.symbol === CardSymbol.bolt;
      }
      if (!hasFire) {
        hasFire = card2.symbol === CardSymbol.fire;
      }
    }
    if (card3.symbol === CardSymbol.bolt || card3.symbol === CardSymbol.fire) {
      count += card3.value;
      if (!hasBolt) {
        hasBolt = card3.symbol === CardSymbol.bolt;
      }
      if (!hasFire) {
        hasFire = card3.symbol === CardSymbol.fire;
      }
    }
    if (card4.symbol === CardSymbol.bolt || card4.symbol === CardSymbol.fire) {
      count += card4.value;
      if (!hasBolt) {
        hasBolt = card4.symbol === CardSymbol.bolt;
      }
      if (!hasFire) {
        hasFire = card4.symbol === CardSymbol.fire;
      }
    }
    return count === 12 && hasBolt && hasFire;
  }
}
