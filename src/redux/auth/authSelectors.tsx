import { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectUser = (state: RootState) => state.auth.user;

export const selectUserId = (state: RootState) => state.auth.user._id;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
};

export default authSelectors;
