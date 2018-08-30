import * as fromUser from './manage.reducer';
import {User} from '../models/user';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Dictionary, EntitySelectors } from '@ngrx/entity/src/models';
import { get } from 'lodash';

export interface UserState {
  user: fromUser.LocalState;
}

export const reducers: any = {
  user: fromUser.reducer,
};

// export interface State {
//   userState: UserState;
// }

export const getUserState: MemoizedSelector<any, any> = createFeatureSelector<UserState>('user');

export const getUserEntitiesState: MemoizedSelector<any, any> = createSelector(
  getUserState, state => state.user,
);
export const {
  selectIds: getUserIds,
  selectEntities: getUserEntities,
  selectAll: getAllUser,
  selectTotal: getTotalUser,
}: EntitySelectors<User, any> = fromUser.adapter.getSelectors(getUserState);
