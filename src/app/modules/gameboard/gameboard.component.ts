import {Component, OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'fm-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss'],
})
export class GameboardComponent implements OnInit {
  playerName = '';
  remainMissions = 50;


  constructor(private _user: UserService, private _gameService: GameService) {
    this.playerName = this._user.currentUser.username;
    this._gameService.remainingMissions.subscribe(value => this.remainMissions = value);
  }

  ngOnInit(): void {
    this._gameService.startGame();
  }

  getCurrentMissions() {
    return this._gameService.currentMissions;
  }
}
