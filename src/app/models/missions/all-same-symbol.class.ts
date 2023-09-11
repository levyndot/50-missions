import { Mission, MissionType } from './mission.interface';
import { Card, CardSymbol } from '../card.class';

export class AllSameSymbol extends Mission {
  constructor() {
    super(
      MissionType.Common,
      "Les 4 cartes portent le même symbole (ex: que des éclairs)",
      [ 'fire-card', 'fire-card', 'fire-card', 'fire-card' ]
    );
  }

  validate(card1: Card, card2: Card, card3: Card, card4: Card): boolean {
    return (
      card1.symbol === card2.symbol &&
      card2.symbol === card3.symbol &&
      card3.symbol === card4.symbol
    );
  }
}
