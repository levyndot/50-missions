import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { GameService } from './services/game.service';

@Component({
  selector: 'fm-root',
  templateUrl: './fm.component.html',
  styleUrls: ['./fm.component.scss'],
})
export class fmComponent {
  fixBg = false;

  constructor(
    private _router: Router,
    private _logger: NGXLogger,
    private _gameService: GameService
  ) {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this._logger.debug('Nav ends...', event);
      }
    });
    this._gameService.started.subscribe((value) => {
      this.fixBg = value;
    });
  }
}
