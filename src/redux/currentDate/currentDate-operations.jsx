import { createAsyncThunk } from '@reduxjs/toolkit';

const getDate = createAsyncThunk('currentDate/getDate', async time => {
  console.log(777777777777777777777777, time);
  return time;
});

const currentDateOperations = {
  getDate,
};

export default currentDateOperations;
