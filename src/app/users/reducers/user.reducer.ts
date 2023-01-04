import { Action, createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersFinished } from '../actions/users.actions';

export const userFeatureKey = 'Users';

export interface UserState {
  loading: boolean;
}

export const initialState: UserState = {
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(loadUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadUsersFinished, (state) => ({
    ...state,
    loading: false,
  }))
);
