import { createSlice } from '@reduxjs/toolkit';
import transactionsOperations from './transactions-operation';

const initialState = {
  getByMonth: {},
  addTransaction: {},
  getAll: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [transactionsOperations.getByMonth.fulfilled](state, action) {
      state.getByMonth = action.payload;
    },

    [transactionsOperations.addTransaction.fulfilled](state, action) {
      state.getAll.push(action.payload);
    },

    [transactionsOperations.getAll.fulfilled](state, action) {
      state.getAll = action.payload.result;
    },

    [transactionsOperations.deleteTransaction.fulfilled](state, action) {
      state.getAll = state.getAll.filter(el => el._id !== action.payload);
    },
  },
});

export default transactionsSlice.reducer;
