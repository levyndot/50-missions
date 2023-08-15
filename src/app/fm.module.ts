import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { InitModule } from './modules/init/init.module';
import { environment } from '../environments/environment';
import { LoggerModule } from 'ngx-logger';
import { GameboardModule } from './modules/gameboard/gameboard.module';
import { fmRoutes } from './fm.routes';
import { fmComponent } from './fm.component';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [fmComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    LoggerModule.forRoot({
      disableConsoleLogging: false,
      level: environment.LOG_LEVEL,
    }),
    RouterModule.forRoot(fmRoutes, { initialNavigation: 'enabledBlocking' }),
    InitModule,
    GameboardModule,
  ],
  providers: [],
  bootstrap: [fmComponent],
})
export class fmModule {
  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faUserLarge);
  }
}
