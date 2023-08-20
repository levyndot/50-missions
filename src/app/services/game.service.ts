import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public started = new BehaviorSubject(false);
  private _mode = 'offline';
  private _numberOfPlayers = 1;
  private _remainingMissions = 50;

  startGame() {
    this.started.next(true);
  }

  finishGame() {
    this.started.next(false);
  }

  set mode(mode: string) {
    this._mode = mode;
  }

  get mode() {
    return this._mode;
  }

  set numberOfPlayers(num: number) {
    this._numberOfPlayers = num;
  }

  get numberOfPlayers() {
    return this._numberOfPlayers;
  }

  set remainingMissions(num: number) {
    this._remainingMissions = num;
  }

  get remainingMissions() {
    return this._remainingMissions;
  }
}
