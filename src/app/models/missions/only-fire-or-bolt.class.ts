import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class OnlyFireOrBolt extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Il n\'y a que des cartes éclair et/ou feu',
      [ 'bolt-fire-card', 'bolt-fire-card', 'bolt-fire-card', 'bolt-fire-card' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
        ( card1.symbol === CardSymbol.bolt || card1.symbol === CardSymbol.fire ) &&
        ( card2.symbol === CardSymbol.bolt || card2.symbol === CardSymbol.fire ) &&
        ( card3.symbol === CardSymbol.bolt || card3.symbol === CardSymbol.fire ) &&
        ( card4.symbol === CardSymbol.bolt || card4.symbol === CardSymbol.fire )
    );
  }
}
