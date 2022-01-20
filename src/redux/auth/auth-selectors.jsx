const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.email;

const getUserAvatar = state => state.auth.avatar;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getUserAvatar,
  getIsFetchingCurrent,
};
export default authSelectors;
