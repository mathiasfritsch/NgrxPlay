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
  productFeatureKey,
} from '../products/reducers/product.reducer';
import {
  UserState,
  reducer as UserReducer,
  userFeatureKey,
} from '../users/reducers/user.reducer';

export interface AppState {
  [userFeatureKey]: UserState;
  [productFeatureKey]: ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  [userFeatureKey]: UserReducer,
  [productFeatureKey]: ProductReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
