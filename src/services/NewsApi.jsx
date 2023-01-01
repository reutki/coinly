import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const key = "ff601330e154db7bff9950546ba240e";
const createRequest = (url) => ({ url, mode: 'cors' });

export const newsApi = createApi({
    reducerPath: 'coinApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://newsapi.org/v2/top-headlines?',
    }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: (response) => createRequest(`q=${search}&sortBy=popularity&apiKey=${key}`),
        }),
    }),
});

export const {
    useGetNewsQuery
} = newsApi;