import { describe, it, expect, beforeEach } from 'vitest';
import { AppStore, initReduxStore } from '@core-logic/store/reduxStore';
import { registerUser } from '@core-logic/auth/usecases/registerUser';
import FakeAuthGateway from '@adapters/secondary/auth/fakeAuthGataway';

describe('Register a user', () => {
    let store: AppStore;
    let authGateway: FakeAuthGateway;

    beforeEach(() => {
        authGateway = new FakeAuthGateway();
        store = initReduxStore({ authGateway: authGateway });
    });

    it('Has no user initially', () => {
        expect(store.getState()).toEqual({
            auth: {
                user: null,
                loading: false,
                error: null,
            },
        });
    });

    it('Dispatches new user when registration succeed', async () => {
        authGateway.user = {
            id: '123',
            name: 'Alice',
            role: 'individual',
        };

        await store.dispatch(registerUser('judas@bricot.com', 'password'));

        expect(store.getState()).toEqual({
            auth: {
                user: {
                    id: '123',
                    name: 'Alice',
                    role: 'individual',
                },
                loading: false,
                error: null,
            },
        });
    });

    it('Dispatches an error when registration fails', async () => {
        authGateway.fakeException = true;

        await store.dispatch(registerUser('judas@bricot.com', 'password'));

        expect(store.getState()).toEqual({
            auth: {
                user: null,
                loading: false,
                error: 'An error occurred',
            },
        });
    });
});
