import { Action } from '@ngrx/store';
import { User } from '../models/user';
import { Update } from '@ngrx/entity';

export enum ManageActionTypes {
  LoadUsers = '[Manage] Load Users',
  LoadUsersSuccess = '[Manage] Load Success',

  EditTicket = '[Manage] Edit Ticket',

  ClearStore = '[Manage] Clear Store',
}


export class LoadUsersAction implements Action {
  readonly type: string = ManageActionTypes.LoadUsers;

  constructor(public payload: User) {
  }
}

export class LoadUsersSuccessAction implements Action {
  readonly type: string = ManageActionTypes.LoadUsersSuccess;

  constructor(public payload: User[]) {
  }
}

export class EditTicketAction implements Action {
  readonly type: string = ManageActionTypes.EditTicket;

  constructor(public payload: Update<User>) {
  }
}

export class ClearStoreAction implements Action {
  readonly type: string = ManageActionTypes.ClearStore;
}

export type ManageActions =
  | LoadUsersAction
  | LoadUsersSuccessAction
  | EditTicketAction
  | ClearStoreAction;
