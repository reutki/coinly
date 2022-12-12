import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '9ccf6213c9msh5193065b15f1297p17631ajsn9974957103a4',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=100`),
    }),
    getMarkets: builder.query({
      query: (count) => createRequest(`/markets?limit=50`,),
    }),
  }),
});

export const {
  useGetCryptosQuery, useGetMarketsQuery
} = cryptoApi;
