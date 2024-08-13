import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { useTypedTranslation } from '../../components/hooks/useTypedTranslation';

import { Paths } from '../paths';

export const useSideBarItems = () => {
  const { t } = useTypedTranslation();

  return [
    {
      path: Paths.PROFILE,
      title: t('profiles'),
      icon: <AccountBoxIcon />,
      children: [
        {
          path: Paths.PROFILE_DASHBOARD,
          title: t('dashboard'),
        },
        {
          path: Paths.PROFILE_MAP,
          title: t('map'),
        },
        {
          path: Paths.PROFILE_LIST,
          title: t('List'),
        },
      ],
    },
    {
      path: Paths.VEHICLE,
      title: t('vehicles'),
      icon: <DirectionsCarFilledIcon />,
      children: [
        {
          path: Paths.VEHICLE_DASHBOARD,
          title: t('dashboard'),
        },
        {
          path: Paths.VEHICLE_MAP,
          title: t('map'),
        },
        {
          path: Paths.VEHICLE_LIST,
          title: t('List'),
        },
      ],
    },
  ];
};
