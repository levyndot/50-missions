import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, CardSymbol } from '../models/card.class';
import {Mission} from '../models/missions/mission.interface';
import {ALL_MISSIONS} from "../models/missions/all-missions.constant";

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public started = new BehaviorSubject(false);
  public remainingMissions  = new BehaviorSubject(50);
  private _mode = 'offline';
  private _numberOfPlayers = 1;
  private _deck: Card[] = [];
  private _missions: Mission[] = [];
  currentMissions: (Mission|undefined)[] = [];
  currentCard: (Card|undefined)[] = [];

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
    this.shuffleArray(this._deck);
    this.currentCard = [
      this._deck.shift(),
      this._deck.shift(),
      this._deck.shift(),
      this._deck.shift()
    ];

    // Load missions
    this._missions = [...ALL_MISSIONS];
    this.shuffleArray(this._missions);
    this.remainingMissions.next(50);

    this.currentMissions = [
      this._missions.shift(),
      this._missions.shift(),
      this._missions.shift(),
      this._missions.shift()
    ];
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
