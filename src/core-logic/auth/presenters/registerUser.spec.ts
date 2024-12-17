import { describe, it, expect, beforeEach } from 'vitest';
import { AppStore, initReduxStore } from '@core-logic/store/reduxStore';
import { getRegisterUserViewModel } from '@core-logic/auth/presenters/registerUser';

describe('Register a user', () => {
    let store: AppStore;

    beforeEach(() => {
        store = initReduxStore({});
    });

    it.each([
        {
            action: 'auth/fetchingUser',
            isLoading: true,
            isAuthenticated: false,
            error: null,
            data: null,
        },
        {
            action: 'auth/userFetched',
            isLoading: false,
            isAuthenticated: true,
            error: null,
            data: {
                id: '123',
                name: 'Alice',
                role: 'individual',
            },
        },
        {
            action: 'auth/failedToRegisterUser',
            isLoading: false,
            isAuthenticated: false,
            error: 'rezre',
            data: 'rezre',
        },
    ])(
        `Presents auth data > $action`,
        async ({ action, isLoading, isAuthenticated, error, data }) => {
            await store.dispatch({ type: action, payload: data });
            expect(getRegisterUserViewModel(store.getState())).toEqual({
                isLoading: isLoading,
                isAuthenticated: isAuthenticated,
                error: error,
            });
        }
    );
});
