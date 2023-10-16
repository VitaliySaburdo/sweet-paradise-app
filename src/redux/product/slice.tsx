import {ProductState, ProductAction, ProductActionsTypes } from '../../types/productsSlice';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (
  state = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionsTypes.FETCH_PRODUCTS:
      return { loading: true, error: null, products: [] };
    case ProductActionsTypes.FETCH_PRODUCTS_SUCCESS:
      return { loading: false, error: null, products: action.payload };
    case ProductActionsTypes.FETCH_PRODUCTS_ERROR:
      return { loading: false, error: action.payload, products: [] };
    default:
      return state;
  }
};
