import { Component } from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {NGXLogger} from "ngx-logger";

@Component({
  selector: 'init-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent {
  username: string = "";

  constructor(private _userService: UserService,
              private _logger: NGXLogger) {
  }

  updateUsername() {
    this._userService.currentUser.username = this.username;
    this._logger.info("Username : " + this.username);
  }
}
