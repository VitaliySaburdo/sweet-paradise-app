import { RootState } from "../store";

export const selectOrderHistory = (state: RootState) =>
  state.orderHistory.ordersHistory;
export const selectIsLoading = (state: RootState) =>
  state.orderHistory.isLoading;
export const selectTotalPages = (state: RootState) =>
  state.orderHistory.totalPages;
