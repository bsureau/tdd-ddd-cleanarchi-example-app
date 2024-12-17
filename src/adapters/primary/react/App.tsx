import { Routes, Route } from 'react-router';
import RegisterUser from '@adapters/primary/react/pages/auth/registerUser';
import LoginUser from '@adapters/primary/react/pages/auth/loginUser';
import ProtectedRoute from '@adapters/primary/react/components/security/protectedRoute';
import Dashboard from '@adapters/primary/react/pages/dashboard/dashboard';

function App() {
    return (
        <>
            <Routes>
                <Route
                    path='/register'
                    element={<RegisterUser />}
                />
                <Route
                    path='/login'
                    element={<LoginUser />}
                />

                <Route
                    path='/'
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
