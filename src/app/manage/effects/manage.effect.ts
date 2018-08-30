import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { LoadUsersSuccessAction, LoadUsersAction, ManageActionTypes, } from '../actions/manage.actions';
import { Observable } from 'rxjs/Observable';
import { ManageService } from '../services/manage.service';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';

import { User } from '../models/user';

@Injectable()
export class ManageEffect {


  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType<LoadUsersAction>(ManageActionTypes.LoadUsers),
    map((action: LoadUsersAction) => action.payload),
    switchMap((payload: any) => {
      return this.manageService.loadUsers(payload)
      .pipe(
        map((data: User[]) => new LoadUsersSuccessAction(data)),
      );
    })


  );

  constructor(private actions$: Actions, private manageService: ManageService) {
  }
}
