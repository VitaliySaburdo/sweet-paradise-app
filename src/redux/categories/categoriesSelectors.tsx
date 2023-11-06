import { RootState } from "../store";

export const selectCategory = (state: RootState) =>
  state.categories.currentCategory;
export const selectCategories = (state: RootState) =>
  state.categories.categories;
