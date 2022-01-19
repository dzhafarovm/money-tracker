const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.email;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsFetchingCurrent,
};
export default authSelectors;
