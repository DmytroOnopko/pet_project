import { createBrowserRouter } from 'react-router-dom';

import { Shell } from './shell/Shell';
import { profileRoutes } from './profile/router';
import { vehicleRoutes } from './vehicle/router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />,
    errorElement: <div>Page not found</div>,
    children: [...profileRoutes, ...vehicleRoutes],
  },
]);
