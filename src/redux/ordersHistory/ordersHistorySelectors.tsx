import { RootState } from "../store";
export const selectorHistory = (state: RootState) => state.orderHistory.ordersHistory;