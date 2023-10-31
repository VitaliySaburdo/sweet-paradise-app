import { createSlice } from "@reduxjs/toolkit";
import { getAllOrders as fetchAllOrders } from "./ordersOperation";

const ordersHistorySlice = createSlice({
  name: "ordersHistory",
  initialState: {
    ordersHistory: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrders.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchAllOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllOrders.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ordersHistoryReducer = ordersHistorySlice.reducer;
