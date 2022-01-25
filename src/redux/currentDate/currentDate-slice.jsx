import { createSlice } from '@reduxjs/toolkit';
import currentDateOperations from './currentDate-operations';

const initialState = {
  month: null,
  year: null,
};

const currentDateSlice = createSlice({
  name: 'currentDate',
  initialState,
  extraReducers: {
    [currentDateOperations.getDate.fulfilled](state, action) {
      state.month = action.payload.month;
      state.year = action.payload.year;
    },
  },
});

export default currentDateSlice.reducer;
