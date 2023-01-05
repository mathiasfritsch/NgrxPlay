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
import * as fromPerson from '../person/person.reducer';

export interface AppState {
  [userFeatureKey]: UserState;
  [productFeatureKey]: ProductState;  [fromPerson.personsFeatureKey]: fromPerson.State;

}

export const reducers: ActionReducerMap<AppState> = {
  [userFeatureKey]: UserReducer,
  [productFeatureKey]: ProductReducer,
  [fromPerson.personsFeatureKey]: fromPerson.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
