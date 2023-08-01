import { Injectable } from '@angular/core';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser = new User();
}
