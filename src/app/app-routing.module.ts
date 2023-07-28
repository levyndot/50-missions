import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SlpashComponent} from "./modules/splash/slpash.component";

export const SPLASH_VIEW = "splash";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: SPLASH_VIEW
  },
  {
    path: SPLASH_VIEW,
    pathMatch: 'full',
    component: SlpashComponent,
    title: "New game"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
