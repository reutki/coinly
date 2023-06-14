import { createSlice } from '@reduxjs/toolkit'
const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

const initialState = {
    authorized: isAuthenticated,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthorized: (state) => {
            state.authorized = true
        },
        setUnauthorized: (state) => {
            state.authorized = false

        },


    }
})

export const { setAuthorized, setUnauthorized } = authSlice.actions

export default authSlice.reducer
