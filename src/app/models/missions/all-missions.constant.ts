import {NoWind} from "./no-wind.class";
import {NoBolt} from "./no-bolt.class";
import {NoFire} from "./no-fire.class";
import {NoWater} from "./no-water.class";
import {SumBoltEq12} from "./sum-bolt-eq-12.class";
import {Sum3CardSbsEq7} from "./sum-3-card-sbs-eq-7.class";
import {Exact2DiffValues} from "./exact-2-diff-values.class";
import {SumBFEqSumWWClass} from "./sum-bf-eq-sum-ww.class";
import {OddAtEnds} from "./odd-at-ends.class";
import {Mission} from "./mission.interface";

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
