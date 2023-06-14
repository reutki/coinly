import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        list: []
    },
    reducers: {
        addFavorite: (state, action) => {
            const { uuid } = action.payload;
            if (!state.list.includes(uuid)) {
                state.list.push(uuid);
            }
        },
        removeFavorite: (state, action) => {
            const { uuid } = action.payload;
            const index = state.list.indexOf(uuid);
            if (index !== -1) {
                state.list.splice(index, 1);
            }
        }
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.list;

export default favoritesSlice.reducer;
