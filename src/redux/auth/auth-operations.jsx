import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://teamproj-money-tracker.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/api/auth/signup', credentials);
    token.set(data.token);

    return data;
  } catch (error) {
    toast('This user is already registered');
    console.log(error);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/api/auth/signin', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast('Вы ввели неверный пароль');
    console.log(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/api/auth/logout');
    token.unSet();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};
export default authOperations;
