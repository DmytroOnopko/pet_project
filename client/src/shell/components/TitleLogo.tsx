import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Paths } from '../paths';

export const TitleLogo = ({ title }: { title: ReactNode }) => (
  <Link
    to={Paths.PROFILE_DASHBOARD}
    style={{
      textDecoration: 'none',
    }}
  >
    <Typography
      sx={{
        fontSize: ({ spacing }) => spacing(2.5),
        textTransform: 'uppercase',
        color: ({ palette }) => palette.common.white,
      }}
    >
      {title}
    </Typography>
  </Link>
);
