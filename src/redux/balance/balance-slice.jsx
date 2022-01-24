import { createSlice } from '@reduxjs/toolkit';
import balanceOperations from './balance-operations';

const initialState = {
  getCurrentUserBalance: '',
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    [balanceOperations.getCurrentUserBalance.fulfilled](state, action) {
      state.getCurrentUserBalance = action.payload;
    },
  },
});

export default balanceSlice.reducer;
