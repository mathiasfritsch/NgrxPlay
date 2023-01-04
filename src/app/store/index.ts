import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import {
  ProductState,
  reducer as ProductReducer,
} from '../products/reducers/product.reducer';
import {
  UserState,
  reducer as UserReducer,
} from '../users/reducers/user.reducer';

export interface AppState {
  UserState: UserState;
  ProductState: ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  UserState: UserReducer,
  ProductState: ProductReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
