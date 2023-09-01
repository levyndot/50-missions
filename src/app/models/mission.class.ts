import {Card} from "./card.class";

export enum MissionType {
    Common,
    GoldMedal,
    SilverMedal,
    BronzeMedal
}

export class Mission {
    rule;
    view: MissionView;
    // 0 is not a medal, 1 is gold, 2 is silver and 3 is bronze.
    type: MissionType;
    validate: any;

    constructor(rule: string, view: MissionView, type: MissionType, validateFunction: any) {
        this.rule = rule;
        this.view = view;
        this.type = type;
        this.validate = validateFunction;
    }
}

class MissionView {
    description: string;
    html: string;

    constructor(description: string, html: string) {
        this.description = description;
        this.html = html;
    }
}

export const ALL_MISSIONS = [
    new Mission("no wind cards",
        new MissionView("Pas de carte vent",
            ""),
        MissionType.Common, (card1: Card, card2: Card, card3: Card, card4: Card): boolean => {
            return true;
        })
]
