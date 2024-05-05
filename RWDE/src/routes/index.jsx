import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../components/layout/MainLayout';
import HomePage from '../pages/HomePage';
import LeaderboardPage from '../pages/LeaderboardPage';
import { AuthLayout } from '../components/layout/AuthLayout';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import ThreadDetail from '../pages/ThreadDetail';
import CreateThread from '../pages/CreateTread';

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
                path: 'thread/new',
                element: <CreateThread />
            },
            {
                path: 'thread/:id',
                element: <ThreadDetail />
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
