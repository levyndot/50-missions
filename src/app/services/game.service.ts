import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, CardSymbol } from '../models/card.class';
import { Mission } from '../models/mission.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public started = new BehaviorSubject(false);
  private _mode = 'offline';
  private _numberOfPlayers = 1;
  private _remainingMissions = 50;
  private _deck: Card[] = [];
  private _missions: Mission[] = [];

  startGame() {
    this.initializeGame();
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

  private initializeGame() {
    // Load player cards
    this._deck = [];
    for (let val = 1; val <= 7; val++) {
      this._deck.push(new Card(CardSymbol.wind, val));
      this._deck.push(new Card(CardSymbol.wind, val));
      this._deck.push(new Card(CardSymbol.fire, val));
      this._deck.push(new Card(CardSymbol.fire, val));
      this._deck.push(new Card(CardSymbol.water, val));
      this._deck.push(new Card(CardSymbol.water, val));
      this._deck.push(new Card(CardSymbol.bolt, val));
      this._deck.push(new Card(CardSymbol.bolt, val));
    }

    // Load missions
  }
}
