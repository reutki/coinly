import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const historyApyHeaders = {
    'accept': '*'
};
const createRequest = (url) => ({ url });

export const historyApi = createApi({
    reducerPath: 'historyApi',
    baseQuery:
        fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3' }),

    endpoints: (builder) => ({
        getHistory: builder.query({
            query: () => createRequest(`/coins/bitcoin/market_chart?vs_currency=usd&days=90&interval=daily
            `),
            //name.tolowercase(if('' -> - ))
        }),
    }),
});

export const {
    useGetHistoryQuery
} = historyApi;
S