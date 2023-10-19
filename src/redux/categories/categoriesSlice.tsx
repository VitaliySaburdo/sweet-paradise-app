import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoriesProps {
  currentCategory: string;
}

const initialState: CategoriesProps = {
  currentCategory: "",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    changedCategory: (state, action: PayloadAction<string>) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { changedCategory } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
