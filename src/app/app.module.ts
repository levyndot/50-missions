import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {InitModule} from "./modules/init/init.module";
import {environment} from "../environments/environment";
import {LoggerModule} from "ngx-logger";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    InitModule,
    LoggerModule.forRoot({
      disableConsoleLogging: false,
      level: environment.LOG_LEVEL,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
