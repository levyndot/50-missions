import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class Only1Or7 extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Chaque carte a une valeur de 1 ou de 7',
      [ 'card-1-7', 'card-1-7', 'card-1-7', 'card-1-7' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
        ( card1.value === 1 || card1.value === 7 ) &&
        ( card2.value === 1 || card2.value === 7 ) &&
        ( card3.value === 1 || card3.value === 7 ) &&
        ( card4.value === 1 || card4.value === 7 )
    );
  }
}
