import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logOut } from "../auth/authOperations";
import { CategoriesProps, ProductProps } from "../../App/App.types";
import {
  getProductsAll,
  getProductsByCategories,
  addProduct,
  deleteProduct,
  getAllCategories,
} from "./productsOperations";

interface ProductsState {
  products: ProductProps[];
  categories: CategoriesProps[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  categories: [],
  isLoading: false,
  error: null,
};

const extraActions = [
  getProductsAll,
  getProductsByCategories,
  addProduct,
  deleteProduct,
  logOut,
];

const getActions = (type: string) =>
  extraActions.map((action: any) => action[type]);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      state.products = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getProductsAll.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getProductsByCategories.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (item) => item._id === action.payload.id
        );
        state.products.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.products = [];
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(...getActions("pending")), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions("rejected")), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions("fulfilled")), (state) => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const { reset } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
