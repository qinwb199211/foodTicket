import { Injectable } from '@angular/core';
import { find, get, map } from 'lodash';

import * as usersDB from '../../../db/users.json';
import { User } from '../../manage/models/user';

@Injectable()
export class LoginService {
  users: User[];
  isLoggedIn: boolean;
  loggedInUser: User;

  constructor() {
    this.users = map(get(usersDB, 'users'), (user: any) => new User(user));
  }

  login(data: { id: string; password: string }): boolean {
    const user = find(this.users, (u) => u.id === data.id);
    if (!!user && user.password === data.password) {
      this.isLoggedIn = true;
      this.loggedInUser = user;
      return true;
    } else {
      this.isLoggedIn = false;
      this.loggedInUser = undefined;
      return false;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.loggedInUser = undefined;
  }
}
