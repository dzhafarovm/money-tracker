const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.email;

const getUserAvatar = state => state.auth.avatar;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const getBalance = state => state.auth.balance;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getUserAvatar,
  getIsFetchingCurrent,
  getBalance,
};
export default authSelectors;
