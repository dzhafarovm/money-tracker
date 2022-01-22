import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

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
    const {
      data: { data },
    } = await axios.post('/api/auth/signup', credentials);
    token.set(data.token);
    toast.success('Вы зарегистрированы');
    return data.user;
  } catch (error) {
    toast.error(
      'Пользователь с такми email уже зарегистрирован или введите правильный пароль',
    );
    console.log(error);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const {
      data: { data },
    } = await axios.post('/api/auth/signin', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Вы ввели неверный пароль');
    console.log(error);
  }
});

// GOOGLE//

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.get('/api/auth/logout');
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
      const {
        data: { data },
      } = await axios.get('api/users/current');
      return data.user;
    } catch (error) {
      console.log(error);
    }
  },
);

const googleLogin = createAsyncThunk(
  'auth/googlelogin',
  async (_, thunkAPI) => {
    const data = useLocation();
    console.log(data);

    const googleToken = data.search.split('=')[1];

    if (googleToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(googleToken);

    try {
      const {
        data: { data },
      } = await axios.get('api/users/current');
      return data.user;
    } catch (error) {
      console.log(error);
    }
  },
);

const authOperations = {
  register,
  logIn,
  googleLogin,
  logOut,
  fetchCurrentUser,
};
export default authOperations;
