import { RootState } from "../store";
export const selectOrders = (state: RootState) => state.orders.orders;
export const selectOrdersHistory = (state: RootState) => state.orders.ordersHistory;