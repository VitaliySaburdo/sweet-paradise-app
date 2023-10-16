const FETCH_PRODUCTS = "FETCH_PRODUCTS";
const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";

interface ProductState {
  products: any[];
  loading: boolean;
  error: null | string;
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
    case FETCH_PRODUCTS:
      return { loading: true, error: null, products: [] };
    case FETCH_PRODUCTS_SUCCESS:
      return { loading: false, error: null, products: action.payload };
    case FETCH_PRODUCTS_ERROR:
      return { loading: false, error: action.payload, products: [] };
    default:
      return state;
  }
};
