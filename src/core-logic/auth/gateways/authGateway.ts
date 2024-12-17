import User from '@core-logic/auth/models/user';

interface AuthGateway {
    registerUser(email: string, password: string): Promise<User>;
}

export default AuthGateway;
