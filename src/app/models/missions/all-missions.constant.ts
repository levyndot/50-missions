import {NoWind} from "./no-wind.class";
import {NoBolt} from "./no-bolt.class";
import {NoFire} from "./no-fire.class";
import {NoWater} from "./no-water.class";
import {SumBoltEq12} from "./sum-bolt-eq-12.class";
import {Sum3CardSbsEq7} from "./sum-3-cards-sbs-eq-7.class";
import {Exact2DiffValues} from "./exact-2-diff-values.class";
import {SumBFEqSumWWClass} from "./sum-bf-eq-sum-ww.class";
import {OddAtEnds} from "./odd-at-ends.class";
import {Mission} from "./mission.interface";
import {FireGtWaterGtWind} from "./fire-gt-water-gt-wind.class";
import {Left2CardsSameRight2CardsSame} from "./left-2-cards-same-right-2-cards-same.class";
import {SumEq13} from "./sum-eq-13.class";
import {SumOf3CardsSbsEq16} from "./sum-3-cards-sbs-eq-16.class";
import {WaterSurroundedByBolt} from "./water-surrounded-by-bolt.class";
import {Sum2LeftEqSum2Right} from "./sum-2-left-eq-sum-2-right.class";
import {AllSameSymbol} from "./all-same-symbol.class";
import {BoltGtFireGtWater} from "./bolt-gt-fire-gt-water.class";
import {DiffBfEqDifWw} from "./diff-bf-eq-dif-ww.class";
import {Diff2LeftEqDiff2Right} from "./diff-2-left-eq-diff-2-right.class";
import {Sum2LeftEqTimes2Right} from "./sum-2-left-eq-times-2-right.class";
import {FireAtEnds} from "./fire-at-ends.class";
import {EvenAtEnds} from "./even-at-ends.class";
import {BoltAtEnds} from "./bolt-at-ends.class";
import {WindAtEnds} from "./wind-at-ends.class";
import {WaterAtEnds} from "./water-at-ends.class";
import {WindSurroundedByFire} from "./wind-surrounded-by-fire.class";
import {FireSurroundedByWater} from "./fire-surrounded-by-water.class";
import {BoltSurroundedByWind} from "./bolt-surrounded-by-wind.class";

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
    new DiffBfEqDifWw(),
    new OddAtEnds(),
    new EvenAtEnds(),
    new FireAtEnds(),
    new BoltAtEnds(),
    new WindAtEnds(),
    new WaterAtEnds(),
    new FireGtWaterGtWind(),
    new BoltGtFireGtWater(),
    new Left2CardsSameRight2CardsSame(),
    new SumEq13(),
    new SumOf3CardsSbsEq16(),
    new WaterSurroundedByBolt(),
    new WindSurroundedByFire(),
    new FireSurroundedByWater(),
    new BoltSurroundedByWind(),
    new Sum2LeftEqSum2Right(),
    new Sum2LeftEqTimes2Right(),
    new Diff2LeftEqDiff2Right(),
    new AllSameSymbol()
];
