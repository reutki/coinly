import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const historyApiHeaders = {
    'x-access-token': 'coinrankingfa143582e81ca88ae2c32c18a76edcc3e6705c29779b1162',
    'Access-Control-Allow-Origin': "*",
    'Content-Type': 'application/json',


};
const createRequest = (url) => ({ url, mode: 'no-cors' });

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
    }),
});

export const {
    useGetHistoryQuery
} = historyApi;
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const historyApyHeaders = {
//     'accept': '*',
//     'Access-Control-Allow-Origin': '*'
// };
// const createRequest = (url) => ({ url });

// export const historyApi = createApi({
//     reducerPath: 'historyApi',
//     baseQuery:
//         fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3' }),

//     endpoints: (builder) => ({
//         getHistory: builder.query({
//             query: (name) => createRequest(`/coins/${name}/market_chart?vs_currency=usd&days=90&interval=daily
//             `),
//             //name.tolowercase(if('' -> - ))
//         }),
//     }),
// });

// export const {
//     useGetHistoryQuery
// } = historyApi;
