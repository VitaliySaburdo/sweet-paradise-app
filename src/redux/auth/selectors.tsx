export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user.name;

export const selectIsRefreshing = state => state.auth.isRefreshing;


const authSelectors = {
  selectIsLoggedIn,
  selectUser,
selectIsRefreshing
};

export default authSelectors;
