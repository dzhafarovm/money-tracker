import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import balanceOperations from '../balance/balance-operations';

axios.defaults.baseURL = 'https://teamproj-money-tracker.herokuapp.com';

const getByMonth = createAsyncThunk(
  'transactions/getByMonth',
  async ({ month, year }) => {
    try {
      const { data } = await axios.get(
        `api/transactions/getByMonth/?&month=${month}&year=${year}`,
      );

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async function (newData, { dispatch }) {
    try {
      const transaction = await axios.post(`api/transactions/`, newData);

      dispatch(balanceOperations.getCurrentUserBalance());
      return transaction.data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async function (_id, { dispatch }) {
    try {
      const data = await axios.delete(`api/transactions/${_id}`);
      console.log('data', data);
      toast.success('Ваша транзакция удалена');

      dispatch(balanceOperations.getCurrentUserBalance());

      return _id;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const getAll = createAsyncThunk('transactions/getAll', async type => {
  try {
    const { data } = await axios.get(`api/transactions/getType/${type}`);
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const transOperations = {
  getByMonth,
  addTransaction,
  getAll,
  deleteTransaction,
};

export default transOperations;
