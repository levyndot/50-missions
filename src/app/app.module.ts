import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoggerModule} from "ngx-logger";
import {environment} from "../environments/environment";
import {InitModule} from "./modules/init/init.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InitModule,
    LoggerModule.forRoot({
      disableConsoleLogging: false,
      level: environment.LOG_LEVEL
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
