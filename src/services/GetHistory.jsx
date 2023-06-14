import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const historyApiHeaders = {
    'x-access-token': 'coinrankingfa143582e81ca88ae2c32c18a76edcc3e6705c29779b1162',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
};
const createRequest = (url) => ({ url, mode: 'cors' });

export const historyApi = createApi({
    reducerPath: 'historyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coinranking.com/v2/',
        historyApiHeaders,

    }),
    endpoints: (builder) => ({
        getHistory: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}/history`),
            historyApiHeaders,
        }),
        // getData: builder.query({
        //     query: (uuid) => createRequest(`/coin/${uuid}`),
        //     historyApiHeaders,
        // }),
    }),
});

export const {
    useGetHistoryQuery,
    // useGetDataQuery
} = historyApi;
