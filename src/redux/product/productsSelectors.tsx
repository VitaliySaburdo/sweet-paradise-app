import { RootState } from "../store";
export const selectProducts = (state: RootState) => state.products;
export const selectIsLoading = (state: RootState) => state.products.isLoading;
export const selectError = (state: RootState) => state.products.error;
