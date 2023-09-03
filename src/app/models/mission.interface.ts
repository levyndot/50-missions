import { Card } from './card.class';
import { NoWind } from './missions/no-wind.class';
import { SumBoltEq12 } from './missions/sum-bolt-eq-12.class';
import { Sum3CardSbsEq7 } from './missions/sum-3-card-sbs-eq-7.class';
import { Exact2DiffValues } from './missions/exact-2-diff-values.class';
import { SumBFEqSumWWClass } from './missions/sum-bf-eq-sum-ww.class';
import { OddAtEnds } from './missions/odd-at-ends.class';
import { NoBolt } from './missions/no-bolt.class';
import { NoFire } from './missions/no-fire.class';
import { NoWater } from './missions/no-water.class';

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
  view: MissionView;

  protected constructor(
    type: MissionType,
    description: string,
    view: MissionView
  ) {
    this.type = type;
    this.description = description;
    this.view = view;
  }

  abstract validate(
    card1: Card,
    card2: Card,
    card3: Card,
    card4: Card
  ): boolean;
}

export class MissionView {
  html: string[];

  constructor(html: string[]) {
    this.html = html;
  }
}

export const ALL_MISSIONS: Mission[] = [
  new NoWind(),
  new NoBolt(),
  new NoFire(),
  new NoWater(),
  new SumBoltEq12(),
  new Sum3CardSbsEq7(),
  new Sum3CardSbsEq7(),
  new Exact2DiffValues(),
  new SumBFEqSumWWClass(),
  new OddAtEnds(),
];
