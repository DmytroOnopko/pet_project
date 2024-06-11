import { Menu, MenuItem, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { Paths } from '../paths';

interface Props {
  open?: boolean;
  onClose?: () => void;
  items?: { title: ReactNode; path: Paths }[];
}

export const HeaderMenu = ({ items = [], open = false, onClose }: Props) => {
  const navigate = useNavigate();

  return (
    <Menu
      sx={{ mt: '45px' }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      onClose={onClose}
    >
      {items.map((item) => (
        <MenuItem key={item.path} onClick={() => navigate(item.path)}>
          <Typography textAlign="center">{item.title}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};
