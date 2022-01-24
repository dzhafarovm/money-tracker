import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

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

      toast.success('Ваш баланс обновлён');
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
