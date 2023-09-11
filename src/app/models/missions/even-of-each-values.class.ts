import { Mission, MissionType } from './mission.interface';
import { Card } from '../card.class';

export class EvenOfEachValues extends Mission {
  constructor() {
    super(
      MissionType.Common,
      'Chaque carte a une valeur impaire différente',
      [
        'card-1',
        'card-5',
        'card-3',
        'card-7',
      ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    const values: number[] = [];
    let valid = true;
      if(card1.value % 2 === 0) {
          values.push(card1.value);
      } else {
          valid = false;
      }
      if(card2.value % 2 === 0 && !values.includes(card2.value)) {
          values.push(card2.value);
      } else {
          valid = false;
      }
      if(card3.value % 2 === 0 && !values.includes(card3.value)) {
          values.push(card3.value);
      } else {
          valid = false;
      }
      if(card4.value % 2 === 0 && !values.includes(card4.value)) {
          values.push(card4.value);
      } else {
          valid = false;
      }
    return valid;
  }
}
