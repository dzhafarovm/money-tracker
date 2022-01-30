import { createSlice } from '@reduxjs/toolkit';
import balanceOperations from './balance-operations';

const initialState = {
  currentUserBalance: '',
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    [balanceOperations.getCurrentUserBalance.fulfilled](state, action) {
      state.currentUserBalance = action.payload;
    },

    [balanceOperations.updateBalance.fulfilled](state, action) {
      state.currentUserBalance = action.payload.balance;
    },
  },
});

export default balanceSlice.reducer;
