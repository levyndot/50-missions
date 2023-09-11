import {Mission} from "./mission.interface";
import {AllSameSymbol} from "./all-same-symbol.class";
import {AllSymbols2Values} from "./all-symbols-2-values.class";
import {BoltAtEnds} from "./bolt-at-ends.class";
import {BoltGtFireGtWater} from "./bolt-gt-fire-gt-water.class";
import {BoltSurroundedByWind} from "./bolt-surrounded-by-wind.class";
import {Diff2LeftEqDiff2Right} from "./diff-2-left-eq-diff-2-right.class";
import {DiffBfEqDifWw} from "./diff-bf-eq-dif-ww.class";
import {DiffEachCardEq0Or1} from "./diff-each-card-eq-0-or-1.class";
import {DiffEachCardEq1} from "./diff-each-card-eq-1.class";
import {DiffEachCardEq1Or2} from "./diff-each-card-eq-1-or-2.class";
import {DiffEachCardEq2} from "./diff-each-card-eq-2.class";
import {EvenAtEnds} from "./even-at-ends.class";
import {EvenOfEachValues} from "./even-of-each-values.class";
import {Exact2CardsLt4} from "./exact-2-cards-lt-4.class";
import {Exact2DiffValues} from "./exact-2-diff-values.class";
import {Exact2Symbols} from "./exact-2-symbols.class";
import {Exact2Symbols2Values} from "./exact-2-symbols-2-values.class";
import {Exact3CardsWithSameValue} from "./exact-3-cards-with-same-value.class";
import {FireAtEnds} from "./fire-at-ends.class";
import {FireGtWaterGtWind} from "./fire-gt-water-gt-wind.class";
import {FireSurroundedByWater} from "./fire-surrounded-by-water.class";
import {Left2CardsSameRight2CardsSame} from "./left-2-cards-same-right-2-cards-same.class";
import {NoBolt} from "./no-bolt.class";
import {NoFire} from "./no-fire.class";
import {NoSameSymbolSds} from "./no-same-symbol-sds.class";
import {NoWater} from "./no-water.class";
import {NoWind} from "./no-wind.class";
import {OddAtEnds} from "./odd-at-ends.class";
import {Only1Or7} from "./only-1-or-7.class";
import {OnlyFireOrBolt} from "./only-fire-or-bolt.class";
import {SameSymbolDifferentValues} from "./same-symbol-different-values.class";
import {Sum2CardsSbsEq6} from "./sum-2-cards-sbs-eq-6.class";
import {Sum2CardsSbsEq10} from "./sum-2-cards-sbs-eq-10.class";
import {Sum2LeftEqSum2Right} from "./sum-2-left-eq-sum-2-right.class";
import {Sum2LeftEqTimes2Right} from "./sum-2-left-eq-times-2-right.class";
import {Sum3CardsSbsEq7} from "./sum-3-cards-sbs-eq-7.class";
import {Sum3CardsSbsEq9} from "./sum-3-cards-sbs-eq-9.class";
import {Sum3CardsSbsEq11} from "./sum-3-cards-sbs-eq-11.class";
import {Sum3CardsSbsEq16} from "./sum-3-cards-sbs-eq-16.class";
import {SumBFEq12} from "./sum-bf-eq-12.class";
import {SumBFEqSumWW} from "./sum-bf-eq-sum-ww.class";
import {SumBwEqWinds} from "./sum-bw-eq-winds.class";
import {SumEq13} from "./sum-eq-13.class";
import {SumWwEq13} from "./sum-ww-eq-13.class";
import {Times2LeftEqTimes2Right} from "./times-2-left-eq-times-2-right.class";
import {ValuesIncOrDec} from "./values-inc-or-dec.class";
import {WaterAtEnds} from "./water-at-ends.class";
import {WaterSurroundedByBolt} from "./water-surrounded-by-bolt.class";
import {WindAtEnds} from "./wind-at-ends.class";
import {WindSurroundedByFire} from "./wind-surrounded-by-fire.class";

export const ALL_MISSIONS: Mission[] = [
    new AllSameSymbol(),
    new AllSymbols2Values(),
    new BoltAtEnds(),
    new BoltGtFireGtWater(),
    new BoltSurroundedByWind(),
    new Diff2LeftEqDiff2Right(),
    new DiffBfEqDifWw(),
    new DiffEachCardEq0Or1(),
    new DiffEachCardEq1(),
    new DiffEachCardEq1Or2(),
    new DiffEachCardEq2(),
    new EvenAtEnds(),
    new EvenOfEachValues(),
    new Exact2CardsLt4(),
    new Exact2DiffValues(),
    new Exact2Symbols(),
    new Exact2Symbols2Values(),
    new Exact3CardsWithSameValue(),
    new FireAtEnds(),
    new FireGtWaterGtWind(),
    new FireSurroundedByWater(),
    new Left2CardsSameRight2CardsSame(),
    new NoBolt(),
    new NoFire(),
    new NoSameSymbolSds(),
    new NoWater(),
    new NoWind(),
    new OddAtEnds(),
    new Only1Or7(),
    new OnlyFireOrBolt(),
    new SameSymbolDifferentValues(),
    new Sum2CardsSbsEq6(),
    new Sum2CardsSbsEq10(),
    new Sum2LeftEqSum2Right(),
    new Sum2LeftEqTimes2Right(),
    new Sum3CardsSbsEq7(),
    new Sum3CardsSbsEq9(),
    new Sum3CardsSbsEq11(),
    new Sum3CardsSbsEq16(),
    new SumBFEq12(),
    new SumBFEqSumWW(),
    new SumBwEqWinds(),
    new SumEq13(),
    new SumWwEq13(),
    new Times2LeftEqTimes2Right(),
    new ValuesIncOrDec(),
    new WaterAtEnds(),
    new WaterSurroundedByBolt(),
    new WindAtEnds(),
    new WindSurroundedByFire(),
];
