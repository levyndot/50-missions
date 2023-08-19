import { NgModule } from '@angular/core';
import { GameboardComponent } from './gameboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { MissionCardComponent } from './components/mission-card/mission-card.component';

@NgModule({
  declarations: [GameboardComponent, MissionCardComponent],
  imports: [FontAwesomeModule, NgOptimizedImage, NgIf],
})
export class GameboardModule {}
