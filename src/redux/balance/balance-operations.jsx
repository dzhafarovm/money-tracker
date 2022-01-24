import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://teamproj-money-tracker.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const getCurrentUserBalance = createAsyncThunk(
  'balance/getBalance',
  async costs => {
    const state = costs.getState();
    const persistedToken = state.balance.token;

    if (persistedToken === null) {
      return costs.rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const {
        data: { data },
      } = await axios.get('api/users/current/balance/getBalance');
      return data.user.balance;
    } catch (error) {
      console.log(error);
    }
  },
);

const balanceOperations = {
  getCurrentUserBalance,
};
export default balanceOperations;
