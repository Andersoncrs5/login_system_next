import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        refreshToken: null,
    },
    reducers: {
        logout: (state) => {
            state.token = null
            state.refreshToken = null
        },
        loginSuccess: (state, action) => {
            state.token = action.payload.Token
            state.refreshToken = action.payload.RefreshToken
        }
    }
})

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
