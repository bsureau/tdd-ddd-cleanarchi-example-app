import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '@core-logic/auth/models/user';

interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        fetchingUser(state) {
            state.loading = true;
        },
        userFetched(state, action: PayloadAction<User>) {
            state.loading = false;
            state.user = action.payload;
        },
        failedToRegisterUser(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchingUser, userFetched, failedToRegisterUser } =
    authSlice.actions;
export default authSlice.reducer;
