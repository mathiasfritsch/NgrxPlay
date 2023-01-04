import { Action, createReducer, on } from '@ngrx/store';
import {
  loadProductsFinished,
  loadProducts,
} from '../actions/products.actions';

export const productFeatureKey = 'Products';

export interface ProductState {
  loading: boolean;
}
export const initialState: ProductState = {
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadProductsFinished, (state) => ({
    ...state,
    loading: false,
  }))
);
