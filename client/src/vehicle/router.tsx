import { Navigate, RouteObject } from 'react-router-dom';

import { Paths } from '../shell/paths';

export const vehicleRoutes: RouteObject[] = [
  {
    path: Paths.VEHICLE,
    element: <Navigate to={Paths.VEHICLE_DASHBOARD} replace />,
  },

  {
    path: Paths.VEHICLE_DASHBOARD,
    element: <div>VEHICLE_DASHBOARD</div>,
  },
  {
    path: Paths.VEHICLE_MAP,
    element: <div>VEHICLE_MAP</div>,
  },
  {
    path: Paths.VEHICLE_LIST,
    element: <div>VEHICLE_LIST</div>,
  },
];
