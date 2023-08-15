import { Component } from '@angular/core';
import { GameService } from '../../../../services/game.service';

@Component({
  selector: 'fm-init-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  constructor(private _gameService: GameService) {}

  setGameConnectivityMode(mode: string) {
    this._gameService.mode = mode;
  }
}
