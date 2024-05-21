import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import TestDome from '@/pages/testDome';
import ListPage from '@/pages/listPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/test" />,
  },
  {
    path: 'test',
    element: <TestDome />,
  },
  {
    path: 'list',
    element: <ListPage />,
  },
];
const router = createBrowserRouter(routes);

export default router;
