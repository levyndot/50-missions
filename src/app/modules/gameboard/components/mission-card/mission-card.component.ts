import { Component, Input } from '@angular/core';

@Component({
  selector: 'fm-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.scss'],
})
export class MissionCardComponent {
  @Input() recto: boolean = false;
  @Input() ruleDescription: string = '';
}
