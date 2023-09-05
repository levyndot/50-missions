import { Component, Input } from '@angular/core';
import {Mission} from "../../../../models/missions/mission.interface";

@Component({
  selector: 'fm-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.scss'],
})
export class MissionCardComponent {
  @Input() recto: boolean = false;
  @Input() mission: Mission|undefined;

  constructor() {
  }
}
