import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import transactionsReduser from './transaction/transactions-slice.jsx';
import currentDateReducer from './currentDate/currentDate-slice.jsx';
import balanceReduser from './balance/balance-slice.jsx';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const transactionsPersistConfig = {
  key: 'transactions',
  storage,
  whitelist: ['token'],
};

const currentDatePersistConfig = {
  key: 'currentDate',
  storage,
};

const balancePersistConfig = {
  key: 'balance',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: persistReducer(
      transactionsPersistConfig,
      transactionsReduser,
    ),
    currentDate: persistReducer(currentDatePersistConfig, currentDateReducer),
    balance: persistReducer(balancePersistConfig, balanceReduser),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
