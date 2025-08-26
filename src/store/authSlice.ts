import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        refreshToken: null,
        expirationToken: null
    },
    reducers: {
        logout: (state) => {
            state.token = null
            state.refreshToken = null
            state.expirationToken = null
        },
        loginSuccess: (state, action) => {
            state.token = action.payload.token
            state.refreshToken = action.payload.refreshToken
            state.expirationToken = action.payload.expirationToken
        }
    }
})

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
