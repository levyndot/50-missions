import { Routes } from '@angular/router';
import {StartComponent} from "./modules/init/components/start/start.component";
import {UsernameComponent} from "./modules/init/components/username/username.component";
import {InitComponent} from "./modules/init/init.component";

export const INIT_VIEW = "init";
export const INIT_START_VIEW = "start";
export const INIT_USERNAME_VIEW = "username";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: INIT_VIEW
  },
  {
    path: INIT_VIEW,
    title: "50 Missions",
    component: InitComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: INIT_START_VIEW
      },
      {
        path: INIT_START_VIEW,
        component: StartComponent
      },
      {
        path: INIT_USERNAME_VIEW,
        component: UsernameComponent
      }
    ]
  },
  {
    path: '**',
    component: StartComponent
  }
];
