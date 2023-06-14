import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const coinApiHeaders = {
    "authorization": "Apikey {c0648ddf9a71db932d832fcf18f253dc25021ff9c52919b357ea64160ef293ea}"

};
const createRequest = (url) => ({ url, mode: 'cors', coinApiHeaders });

export const coinApi = createApi({
    reducerPath: 'coinApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://min-api.cryptocompare.com/data/',
    }),
    endpoints: (builder) => ({

        getExchange: builder.query({
            query: (response) => createRequest(`price?fsym=${response[0]}&tsyms=${response[1]}`),
        }),
    }),
});

export const {
    useGetExchangeQuery
} = coinApi;