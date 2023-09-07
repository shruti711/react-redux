import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAutenticated: false }

const authSlice = createSlice({
    name: "Authenticated",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAutenticated = true;
        },
        logout(state){
            state.isAutenticated = false;
        }
    }
})

export const authAction = authSlice.actions;

export default authSlice.reducer;