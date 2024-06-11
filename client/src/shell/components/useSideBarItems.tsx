import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

import { Paths } from '../paths';

export const useSideBarItems = () => {
  return [
    {
      path: Paths.PROFILE,
      title: 'Profile',
      icon: <AccountBoxIcon />,
      children: [
        {
          path: Paths.PROFILE_DASHBOARD,
          title: 'Dashboard',
        },
        {
          path: Paths.PROFILE_MAP,
          title: 'Map',
        },
        {
          path: Paths.PROFILE_LIST,
          title: 'List',
        },
      ],
    },
    {
      path: Paths.VEHICLE,
      title: 'Vehicle',
      icon: <DirectionsCarFilledIcon />,
      children: [
        {
          path: Paths.VEHICLE_DASHBOARD,
          title: 'Vehicle Dashboard',
        },
        {
          path: Paths.VEHICLE_MAP,
          title: 'Vehicle Map',
        },
        {
          path: Paths.VEHICLE_LIST,
          title: 'Vehicle List',
        },
      ],
    },
  ];
};
