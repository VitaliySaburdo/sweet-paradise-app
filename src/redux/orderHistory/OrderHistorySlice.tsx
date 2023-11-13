import { createSlice } from "@reduxjs/toolkit";
import { OrderHistoryProps } from "../../App/App.types";
import { getAllOrders } from "./orderHistoryOperation";

interface orderHistoryItemProps {
  _id: string;
  items: OrderHistoryProps[];
  orderNumber: number;
  orderTime: string;
  owner: string;
  totalPrice: number;
}

interface orderHistoryState {
  ordersHistory: orderHistoryItemProps[];
  totalPages: number,
  isLoading: boolean;
}

const initialState: orderHistoryState = {
  ordersHistory: [],
  totalPages: 0,
  isLoading: false,
};

const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState,
  reducers: {
    reset: (state) => {
      state.ordersHistory = [];
      state.isLoading = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.ordersHistory = action.payload.orders;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(getAllOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrders.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const orderHistoryReducer = orderHistorySlice.reducer;
