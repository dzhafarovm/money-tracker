import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://teamproj-money-tracker.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/api/auth/signup', credentials);
    token.set(data.token);
    // toast('you are successfully registered');
    return data;
  } catch (error) {
    // toast('registration failed');
    return rejectWithValue(error.data);
  }
});

const logIn = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/api/auth/signin', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // toast('login failed');
    return rejectWithValue(error.data);
  }
});

const logOut = createAsyncThunk('/auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/api/auth/logout');
    token.unset();
  } catch (error) {
    return rejectWithValue(error.data);
  }
});

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  console.log(thunkAPI.getState());
  const persistedToken = state.auth.token;
  console.log(persistedToken);
  if (persistedToken === null) {
    console.log('no token');
    return thunkAPI.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.data);
  }
});

const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default authOperations;
