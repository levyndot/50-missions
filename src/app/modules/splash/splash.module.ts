import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlpashComponent } from './slpash.component';
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    SlpashComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class SplashModule { }
