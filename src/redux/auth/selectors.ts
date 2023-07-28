export const selectIsLoggedIn = (state: any) => {
  return state.auth.isLoggedIn;
};

export const selectUser = (state: any) => state.auth.user;

export const selectIsRefreshing = (state: any) => state.auth.isRefreshing;

export const selectIsError = (state: any) => state.auth.error;

export const selectToken = (state: any) => state.auth.token;
