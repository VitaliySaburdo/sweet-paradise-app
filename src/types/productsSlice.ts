export interface ProductState {
  products: any[];
  loading: boolean;
  error: null | string;
}

export enum ProductActionsTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
}

interface FetchProductsAction {
    type: ProductActionsTypes.FETCH_PRODUCTS;
}

interface FetchProductsSuccessAction {
    type: ProductActionsTypes.FETCH_PRODUCTS_SUCCESS;
    payload: any[];
}

interface FetchProductsErrorAction {
    type: ProductActionsTypes.FETCH_PRODUCTS_ERROR ;
    payload: string;
}

export type ProductAction = FetchProductsAction | FetchProductsSuccessAction | FetchProductsErrorAction