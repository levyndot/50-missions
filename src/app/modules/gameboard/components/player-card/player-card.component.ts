import { Component, Input } from '@angular/core';

@Component({
  selector: 'fm-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
})
export class PlayerCardComponent {
  @Input() symbol = '';
  @Input() number = 0;
  @Input() verso = false;
}
