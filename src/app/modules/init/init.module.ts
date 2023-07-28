import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsernameComponent } from './components/username/username.component';
import { StartComponent } from './components/start/start.component';
import { InitComponent } from './init.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UsernameComponent,
    StartComponent,
    InitComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    RouterOutlet,
    FormsModule,
    RouterLink
  ]
})
export class InitModule { }
