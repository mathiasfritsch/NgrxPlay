import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, userFeatureKey } from '../reducers/user.reducer';
import {
  ProductState,
  productFeatureKey,
} from '../../products/reducers/product.reducer';
export const getUserState = createFeatureSelector<UserState>('user');
export const getProductState = createFeatureSelector<ProductState>('product');

export const selectUserLoaded = createSelector(getUserState, (user) => {
  if (user) return user.loading;
  else return true;
});

export const selectProductLoaded = createSelector(getProductState, (state) => {
  return state.loading;
});
