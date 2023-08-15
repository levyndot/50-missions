import { Route } from '@angular/router';
import {InitComponent} from "./modules/init/init.component";
import {StartComponent} from "./modules/init/components/start/start.component";
import {UsernameComponent} from "./modules/init/components/username/username.component";
import {GameboardComponent} from "./modules/gameboard/gameboard.component";
import {PlayersComponent} from "./modules/init/components/players/players.component";

export const INIT_VIEW = 'init';
export const INIT_START_VIEW = 'start';
export const INIT_USERNAME_VIEW = 'username';
export const INIT_PLAYERS_VIEW = "players"
export const GAME_BOARD_VIEW = 'game';

export const fmRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: INIT_VIEW,
    },
    {
        path: INIT_VIEW,
        title: '50 Missions',
        component: InitComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: INIT_START_VIEW,
            },
            {
                path: INIT_START_VIEW,
                component: StartComponent,
            },
            {
                path: INIT_USERNAME_VIEW,
                component: UsernameComponent,
            },
            {
                path: INIT_PLAYERS_VIEW,
                component: PlayersComponent,
            },
        ],
    },
    {
        path: GAME_BOARD_VIEW,
        title: '50 Missions',
        component: GameboardComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: GAME_BOARD_VIEW,
            }
        ],
    },
    {
        path: '**',
        component: StartComponent,
    },
];
