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
import * as fromLesson from '../lessons/reducers/lesson.reducer';

export interface AppState {
  [userFeatureKey]: UserState;
  [productFeatureKey]: ProductState;  [fromPerson.personsFeatureKey]: fromPerson.State;

[fromLesson.lessonFeatureKey]: fromLesson.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [userFeatureKey]: UserReducer,
  [productFeatureKey]: ProductReducer,
  [fromPerson.personsFeatureKey]: fromPerson.reducer,
  [fromLesson.lessonFeatureKey]: fromLesson.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
