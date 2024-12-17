import { AppThunk } from '@core-logic/store/reduxStore';
import {
    failedToRegisterUser,
    userFetched,
} from '@core-logic/auth/reducers/authReducer';
import AuthGateway from '@core-logic/auth/gateways/authGateway';

export const registerUser =
    (email: string, password: string): AppThunk =>
    async (
        dispatch,
        _getState,
        { authGateway }: { authGateway: AuthGateway }
    ): Promise<void> => {
        try {
            const user = await authGateway.registerUser(email, password);
            dispatch(userFetched(user));
        } catch (e: unknown) {
            if (e instanceof Error) dispatch(failedToRegisterUser(e.message));
        }
    };
