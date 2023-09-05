import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class NoFire extends Mission {
  constructor() {
    super(
      MissionType.Common,
      "Il n'y a aucune carte feu",
      [ 'no-fire' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
      card1.symbol !== CardSymbol.fire &&
      card2.symbol !== CardSymbol.fire &&
      card3.symbol !== CardSymbol.fire &&
      card4.symbol !== CardSymbol.fire
    );
  }
}
