import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://coinly-backend.vercel.app/',
    }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => '/news',
        }),
    }),
});

export const { useGetNewsQuery } = newsApi;
