import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/RapidAPI'
import { historyApi } from '../services/GetHistory';
import { exchangeApi } from '../services/ExchangeApi'
import { coinApi } from '../services/CoinsApi';
import { newsApi } from '../services/NewsApi';
import authSlice from '../services/Authorization'
import { favoriteApi } from '../services/FavoritesApi';
import { favoritesSlice } from '../services/FavoritesSlice';
import { searchApi } from '../services/SearchApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer,
    [exchangeApi.reducerPath]: exchangeApi.reducer,
    [coinApi.reducerPath]: coinApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    auth: authSlice,
    favoritesSlice: favoritesSlice,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([cryptoApi.middleware, historyApi.middleware, exchangeApi.middleware, coinApi.middleware, newsApi.middleware, favoriteApi.middleware, searchApi.middleware]),
})