import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('[Products] Load Products');

export const loadProductsFinished = createAction(
  '[Products] Load Productss finished'
);
