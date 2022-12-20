import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const coinApiHeaders = {

};
const createRequest = (url) => ({ url, mode: 'cors' });

export const coinApi = createApi({
    reducerPath: 'coinApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://min-api.cryptocompare.com/data/',
    }),
    endpoints: (builder) => ({

        getExchange: builder.query({
            query: (have, get) => createRequest(`price?fsym=${have}&tsyms=${get}`),
        }),
    }),
});

export const {
    useGetExchangeQuery
} = coinApi;