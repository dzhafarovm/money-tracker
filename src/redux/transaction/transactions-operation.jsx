import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
  async newData => {
    try {
      const transaction = await axios.post(`api/transactions/`, newData);

      console.log('transaction', transaction);

      return transaction;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async _id => {
    try {
      await axios.delete(`api/transactions/${_id}`);
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
