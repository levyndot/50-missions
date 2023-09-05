import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { GameService } from '../../../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fm-init-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent {
  username = '';

  constructor(
    private _gameService: GameService,
    private _logger: NGXLogger,
    private _router: Router
  ) {}

  setNumberOfPlayers(num: number) {
    this._gameService.numberOfPlayers = num;
    this._router.navigate(['game']).then(() => {
      this._logger.debug('Selected ' + num + ' players.');
    });
  }
}
