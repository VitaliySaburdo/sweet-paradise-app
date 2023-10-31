import { createSlice } from "@reduxjs/toolkit";
import { getAllOrders } from "./ordersOperation";

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
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.ordersHistory = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllOrders.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ordersHistoryReducer = ordersHistorySlice.reducer;
