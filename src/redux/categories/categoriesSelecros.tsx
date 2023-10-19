import { RootState } from "../store";

export const selectCategory = (state: RootState) => state.categories.currentCategory;