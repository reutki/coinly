import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const createRequest = (url) => ({ url, mode: 'cors' });

export const exchangeApi = createApi({
    reducerPath: 'exchangeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coingecko.com/api/v3/',
    }),
    endpoints: (builder) => ({
        getCoins: builder.query({
            query: () => createRequest(`/coins/list?include_platform=false`),

        }),
        getVSCoins: builder.query({
            query: () => createRequest(`/simple/supported_vs_currencies`),

        }),

    }),
});

export const {
    useGetCoinsQuery, useGetVSCoinsQuery
} = exchangeApi;