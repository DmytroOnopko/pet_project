import { RouteObject } from 'react-router-dom';
import { Login } from '../login/index';
import { Paths } from '../shell/paths';

export const loginRoutes: RouteObject[] = [
  {
    path: Paths.LOGIN,
    element: <Login />,
  },
];
