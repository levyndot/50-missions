import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class NoBolt extends Mission {
  constructor() {
    super(
      MissionType.Common,
      "Il n'y a aucune carte éclair",
      [ 'no-bolt' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
      card1.symbol !== CardSymbol.bolt &&
      card2.symbol !== CardSymbol.bolt &&
      card3.symbol !== CardSymbol.bolt &&
      card4.symbol !== CardSymbol.bolt
    );
  }
}
