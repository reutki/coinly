import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
  'X-RapidAPI-Key': '9ccf6213c9msh5193065b15f1297p17631ajsn9974957103a4',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
const createRequestWithParams = (uuids) => {
  if (uuids.length === 0) {
    return { data: { coins: [] } };
  }

  return {
    url: 'https://coinranking1.p.rapidapi.com/coins',
    headers: cryptoApiHeaders,
    params: {
      uuids: uuids
    }
  };
};



export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (period) => createRequest(`/coins?timePeriod=${period}&?referenceCurrencyUuid=HIVsRcGKkPFtW&limit=1000`),
    }),
    getMarkets: builder.query({
      query: (count) => createRequest(`/markets`),
    }),
    getData: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),

    }),
    getFilteredCoinData: builder.mutation({
      query: (uuids) => createRequestWithParams(uuids),

    }),

  }),
});

export const {
  useGetCryptosQuery, useGetMarketsQuery, useGetDataQuery, useGetFilteredCoinDataMutation
} = cryptoApi;
