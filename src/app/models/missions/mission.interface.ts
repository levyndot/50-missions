import { Card } from '../card.class';

export enum MissionType {
  Common,
  GoldMedal,
  SilverMedal,
  BronzeMedal,
}

export abstract class Mission {
  // 0 is not a medal, 1 is gold, 2 is silver and 3 is bronze.
  type: MissionType;
  description: string;
  done = false;
  html: string[];

  protected constructor(
    type: MissionType,
    description: string,
    html: string[]
  ) {
    this.html = html;
    this.type = type;
    this.description = description;
  }

  abstract validate(
    card1: Card,
    card2: Card,
    card3: Card,
    card4: Card
  ): boolean;
}
