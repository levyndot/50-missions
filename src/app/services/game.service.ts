import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  started = false;

  startGame() {
    this.started = true;
  }

  finishGame() {
    this.started = false;
  }
}
