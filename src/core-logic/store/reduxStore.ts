import {
    Action,
    configureStore,
    ThunkAction,
    ThunkDispatch,
} from '@reduxjs/toolkit';
import authReducer from '@core-logic/auth/reducers/authReducer';
import AuthGateway from '@core-logic/auth/gateways/authGateway';

export type Middlewares = {
    authGateway: AuthGateway;
};

export const initReduxStore = (middlewares: Partial<Middlewares>) => {
    return configureStore({
        reducer: {
            auth: authReducer,
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: middlewares,
                },
            }),
    });
};

export type RootState = ReturnType<
    ReturnType<typeof initReduxStore>['getState']
>;

export type AppStore = ReturnType<typeof initReduxStore> & {
    dispatch: ThunkDispatch<RootState, Middlewares, Action>;
};
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    Middlewares,
    Action
>;
