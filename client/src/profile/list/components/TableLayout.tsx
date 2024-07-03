import { useMediaQuery, useTheme } from '@mui/material';

import { TableListProps } from '../../../core/types';
import { Profile } from '../../list/domain';
import { Desktop } from './View/Desktop';
import { Mobile } from './View/Mobile';

export const TableLayout = (props: TableListProps<Profile>) => {
  const theme = useTheme();
  const mdDownBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

  return mdDownBreakpoint ? <Mobile {...props} /> : <Desktop {...props} />;
};
