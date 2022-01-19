import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  email: null,
  token: null,
  balance: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.balance = action.payload.balance;
      state.isLoggedIn = true;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.balance = action.payload.balance;
      state.isLoggedIn = true;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.email = null;
      state.token = null;
      state.balance = null;
      state.isLoggedIn = false;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },

    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.email = action.payload.email;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },

    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
