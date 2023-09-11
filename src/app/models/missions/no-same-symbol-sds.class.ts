import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class NoSameSymbolSds extends Mission {
  constructor() {
    super(
      MissionType.Common,
      '2 cartes qui se touchent ne peuvent être du même symbole',
      [ '4-cards-sds-no-same-symbols' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
        ( card1.symbol !== card2.symbol ) &&
        ( card2.symbol !== card3.symbol ) &&
        ( card3.symbol !== card4.symbol )
    );
  }
}
