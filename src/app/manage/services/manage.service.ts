import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import * as usersDB from '../../../db/users.json';
import { get, filter, find, map } from 'lodash';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ManageService {

  users: User[];

  constructor() {
    this.users = map(get(usersDB, 'users'), (user: any) => new User(user));
  }

  loadUsers(loggedInUser: User): Observable<User[]> {
    switch (loggedInUser.role) {
      case 'admin': {
        return of(this.users);
      }
      case 'teamLeader': {
        return of(filter(this.users, (u: User) => u.teamId === loggedInUser.teamId));
      }
      case 'member': {
        return of([loggedInUser]);
      }
      default: {
        return of([]);
      }
    }
  }
}
