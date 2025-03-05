import { Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './PrivateRoute';

const routes = [
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />
  }
];

export default routes;