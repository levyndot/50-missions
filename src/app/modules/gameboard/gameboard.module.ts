import { NgModule } from '@angular/core';
import { GameboardComponent } from './gameboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import { MissionCardComponent } from './components/mission-card/mission-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PlayerCardComponent } from './components/player-card/player-card.component';

@NgModule({
  declarations: [GameboardComponent, MissionCardComponent, PlayerCardComponent],
    imports: [
        FontAwesomeModule,
        NgOptimizedImage,
        NgIf,
        CardModule,
        ButtonModule,
        NgClass,
        NgForOf,
    ],
})
export class GameboardModule {}
