import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../components/layout/MainLayout';
import HomePage from '../pages/HomePage';
import LeaderboardPage from '../pages/LeaderboardPage';
import { AuthLayout } from '../components/layout/AuthLayout';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'leaderboard',
                element: <LeaderboardPage />
            },
            {
                path: 'threads/:id',
                element: <h1>Login</h1>
            },
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    }
]);

export default routes;
