import AuthGateway from '@core-logic/auth/gateways/authGateway';
import User from '@core-logic/auth/models/user';

class FakeAuthGateway implements AuthGateway {
    user: User = null!;
    fakeException = false;

    async registerUser(email: string, password: string): Promise<User> {
        if (this.fakeException) throw new Error('An error occurred');
        return this.user;
    }
}

export default FakeAuthGateway;
