import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'X-RapidAPI-Key': '9ccf6213c9msh5193065b15f1297p17631ajsn9974957103a4',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getSearch: builder.mutation({
            query: (input) => createRequest(`/search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl&query=${input}`),
        }),
    }),
});

export const {
    useGetSearchMutation
} = searchApi;