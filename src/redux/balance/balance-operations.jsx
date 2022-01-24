import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://teamproj-money-tracker.herokuapp.com';

const getCurrentUserBalance = createAsyncThunk(
  'balance/getBalance',
  async () => {
    try {
      const {
        data: { data },
      } = await axios.get('api/users/currentbalance');

      return data.user.balance;
    } catch (error) {
      console.log(error);
    }
  },
);

const updateBalance = createAsyncThunk(
  'balance/updateBalance',
  async balance => {
    try {
      const {
        data: { data },
      } = await axios.patch('api/users/balance', {
        balance,
      });

      return data.result;
    } catch (error) {
      console.log(error);
    }
  },
);

const balanceOperations = {
  getCurrentUserBalance,
  updateBalance,
};

export default balanceOperations;
