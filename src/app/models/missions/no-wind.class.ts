import { Mission, MissionType, MissionView } from '../mission.interface';
import { Card, CardSymbol } from '../card.class';

export class NoWind extends Mission {
  constructor() {
    super(
      MissionType.Common,
      "Il n'y a aucune carte vent",
      new MissionView(['no-wind'])
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
      card1.symbol !== CardSymbol.wind &&
      card2.symbol !== CardSymbol.wind &&
      card3.symbol !== CardSymbol.wind &&
      card4.symbol !== CardSymbol.wind
    );
  }
}
