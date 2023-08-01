import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  started: boolean = false;

  constructor() {}

  startGame() {
    this.started = true;
  }

  finishGame() {
    this.started = false;
  }
}
