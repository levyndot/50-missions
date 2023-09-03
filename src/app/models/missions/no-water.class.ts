import { Mission, MissionType, MissionView } from '../mission.interface';
import { Card, CardSymbol } from '../card.class';

export class NoWater extends Mission {
  constructor() {
    super(
      MissionType.Common,
      "Il n'y a pas de carte Eau",
      new MissionView(['no-water'])
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
      card1.symbol !== CardSymbol.water &&
      card2.symbol !== CardSymbol.water &&
      card3.symbol !== CardSymbol.water &&
      card4.symbol !== CardSymbol.water
    );
  }
}
