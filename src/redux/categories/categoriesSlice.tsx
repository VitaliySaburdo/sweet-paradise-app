import { createSlice } from "@reduxjs/toolkit";
import { CategoriesProps } from "../../App/App.types";
import { getAllCategories } from "./categoriesOperation";

interface CategoriesState {
  categories: CategoriesProps[];
  currentCategory: string;
  isLoading: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  currentCategory: "",
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    reset: (state) => {
      state.categories = [];
      state.isLoading = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const categoriesReducer = categoriesSlice.reducer;
