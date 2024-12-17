import { RootState } from '@core-logic/store/reduxStore';

type RegisterUserViewModel = {
    isLoading: boolean;
    isAuthenticated: boolean;
    error: string | null;
};

export const getRegisterUserViewModel = (
    state: RootState
): RegisterUserViewModel | null => {
    if (state.auth.loading)
        return {
            isLoading: true,
            isAuthenticated: false,
            error: null,
        };
    if (state.auth.user)
        return {
            isLoading: false,
            isAuthenticated: true,
            error: null,
        };
    if (state.auth.error)
        return {
            isLoading: false,
            isAuthenticated: false,
            error: state.auth.error,
        };
    return null;
};
