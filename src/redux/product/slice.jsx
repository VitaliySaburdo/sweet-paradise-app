// import { createSlice } from "@reduxjs/toolkit";
// import { logOut } from "../auth/operations";
// import {
//   getProductsAll,
//   getProductsByCategories,
//   addProduct,
//   deleteProduct,
// } from "./operations";

// const productsSlice = createSlice({
//   name: "products",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     reset: (state) => {
//       state.items = [];
//       state.isLoading = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) =>
//     builder
//       .addCase(getProductsAll.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(addProduct.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         const index = state.items.findIndex(
//           (item) => item._id === action.payload.id
//         );
//         state.items.splice(index, 1);
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(logOut.fulfilled, (state) => {
//         state.items = [];
//         state.error = null;
//         state.isLoading = false;
//       })
//       .addMatcher(
//         (action) =>
//           action.type.endsWith("/pending") || action.type.endsWith("/rejected"),
//         (state) => {
//           state.isLoading = true;
//         }
//       )
//       .addMatcher(action.type.endsWith("/rejected"), (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       }),
// });

// export const { reset } = productsSlice.actions;
// export const productsReducer = productsSlice.reducer;
