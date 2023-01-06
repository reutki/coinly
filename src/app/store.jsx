import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/RapidAPI'
import { historyApi } from '../services/GetHistory';
import { exchangeApi } from '../services/ExchangeApi'
import { coinApi } from '../services/CoinsApi';
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer,
    [exchangeApi.reducerPath]: exchangeApi.reducer,
    [coinApi.reducerPath]: coinApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([cryptoApi.middleware, historyApi.middleware, exchangeApi.middleware, coinApi.middleware]),
})