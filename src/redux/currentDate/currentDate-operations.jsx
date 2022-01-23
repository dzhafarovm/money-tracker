import { createAsyncThunk } from '@reduxjs/toolkit';

const getDate = createAsyncThunk('currentDate/getDate', async time => {
  return time;
});

const currentDateOperations = {
  getDate,
};

export default currentDateOperations;
