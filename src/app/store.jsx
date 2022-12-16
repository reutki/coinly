import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/RapidAPI'
import { historyApi } from '../services/GetHistory';
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([cryptoApi.middleware, historyApi.middleware]),
})