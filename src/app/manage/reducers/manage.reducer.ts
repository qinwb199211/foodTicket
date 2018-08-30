import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as manageActions from '../actions/manage.actions';
import { User } from '../models/user';

export interface LocalState extends EntityState<User> {
  loading: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (u: User) => u.id,
});

export const initialState: LocalState = adapter.getInitialState({
  loading: false,
});

export function reducer(
  state = initialState,
  action: manageActions.ManageActions
): LocalState {
  switch (action.type) {
    case manageActions.ManageActionTypes.LoadUsers: {
      return {
        ...state,
        loading: true,
      };
    }
    case manageActions.ManageActionTypes.LoadUsersSuccess: {
      return adapter.addMany((<manageActions.LoadUsersSuccessAction>action).payload, state);
    }

    case manageActions.ManageActionTypes.EditTicket: {
      return adapter.updateOne((<manageActions.EditTicketAction>action).payload, state);
    }
    case manageActions.ManageActionTypes.ClearStore: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
