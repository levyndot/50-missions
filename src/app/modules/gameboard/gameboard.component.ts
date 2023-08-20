import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'fm-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss'],
})
export class GameboardComponent {
  playerName = '';
  remainMissions = 50;

  constructor(private _user: UserService, private _game: GameService) {
    this.playerName = this._user.currentUser.username;
    this.remainMissions = this._game.remainingMissions;
  }
}
