import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, userFeatureKey } from '../reducers/user.reducer';
import {
  ProductState,
  productFeatureKey,
} from '../../products/reducers/product.reducer';
export const getUserState = createFeatureSelector<UserState>(userFeatureKey);
export const getProductState =
  createFeatureSelector<ProductState>(productFeatureKey);

export const selectUserLoaded = createSelector(getUserState, (user) => {
  return user.loading;
});

export const selectProductLoaded = createSelector(getProductState, (state) => {
  return state.loading;
});
