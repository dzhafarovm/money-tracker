import { createSlice } from '@reduxjs/toolkit';
import transactionsOperations from './transactions-operation';

const initialState = {
  byMonth: {},
  addTransaction: {},
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [transactionsOperations.getByMonth.fulfilled](state, action) {
      state.byMonth = action.payload;
    },

    [transactionsOperations.addTransaction.pending](state, action) {
      state.addTransaction = action.payload;
    },

    [transactionsOperations.addTransaction.fulfilled](state, action) {
      state.addTransaction = action.payload;
    },

    [transactionsOperations.addTransaction.rejected](state, action) {
      state.addTransaction = action.payload;
    },
  },
});

export default transactionsSlice.reducer;
