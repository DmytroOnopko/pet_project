import { Navigate, RouteObject } from 'react-router-dom';

import { Map } from './map';
import { List } from './list';
import { Dashboard } from './dashboard';

import { Paths } from '../shell/paths';

export const profileRoutes: RouteObject[] = [
  {
    path: Paths.PROFILE,
    element: <Navigate to={Paths.PROFILE_DASHBOARD} replace />,
  },
  {
    path: Paths.PROFILE_DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: Paths.PROFILE_MAP,
    element: <Map />,
  },
  {
    path: Paths.PROFILE_LIST,
    element: <List />,
  },
];
