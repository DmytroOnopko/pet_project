import { AppBar, Box, Container } from '@mui/material';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SideBar } from '../shell/components/SideBar';
import { HeaderUserInfo } from './components/HeaderUserInfo';
import { MainContent } from './styled';
import { TitleLogo } from './components/TitleLogo';

export const Shell = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => setOpen((state) => !state);

  return (
    <>
      <AppBar
        color="primary"
        sx={{
          padding: ({ spacing }) => spacing(2),
          position: 'relative',
        }}
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TitleLogo title="Pet Project" />
          <HeaderUserInfo />
        </Container>
      </AppBar>

      <Box sx={{ display: 'flex', flex: 1, height: '100%' }}>
        <SideBar open={open} onToggle={handleToggle} />

        <MainContent open={open}>
          <Outlet />
        </MainContent>
      </Box>
    </>
  );
};
