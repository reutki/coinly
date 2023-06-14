import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createPostRequest = (url, { coin, username }) => ({
    url,
    method: 'POST',
    body: JSON.stringify({ coin, username }),
    headers: {
        'Content-Type': 'application/json',
    },
});

const createGetRequest = (url, { username }) => ({
    url: `${url}/${encodeURIComponent(username)}`,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
});
const user = localStorage.getItem('username')

export const favoriteApi = createApi({
    reducerPath: 'favoriteApi',
    tagTypes: ["favoriteCoins"],
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://localhost:3001/', //for testing
        baseUrl: 'https://coinly-backend.vercel.app/', //for prod 
    }),
    endpoints: (builder) => ({
        addFavorites: builder.mutation({
            query: (uuid) => createPostRequest('/addfavourite', { coin: uuid, username: user }),
            invalidatesTags: [{ type: 'favoriteCoins', id: 'LIST' }]
        }),
        removeFavorites: builder.mutation({
            query: (coin) => createPostRequest('/removefavourite', { coin: coin, username: user }),
            invalidatesTags: [{ type: 'favoriteCoins', id: 'LIST' }]
        }),
        getFavorites: builder.query({
            query: ({ username }) => createGetRequest('/getFavorites', { username }),
        }),
    }),
});

export const { useAddFavoritesMutation, useRemoveFavoritesMutation, useGetFavoritesQuery } = favoriteApi;
