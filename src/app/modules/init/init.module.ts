import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsernameComponent } from './components/username/username.component';
import { StartComponent } from './components/start/start.component';
import { InitComponent } from './init.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PlayersComponent } from './components/players/players.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PlayersComponent,
    UsernameComponent,
    StartComponent,
    InitComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    RouterOutlet,
    FormsModule,
    RouterLink,
    FontAwesomeModule,
  ],
})
export class InitModule {}
