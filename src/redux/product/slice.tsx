interface ProductState {
  products: any[];
  loading: boolean;
  error: null | string;
}

enum ProductActionsTypes {
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

interface ProductAction {
  type: string;
  payload?: any;
}

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
