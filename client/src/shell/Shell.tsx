import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LocaleSelect } from '../components/LocaleSelect';

import { useSideBarItems } from './components/useSideBarItems';
import { DesktopSidebar } from './components/SidebarView/DesktopSidebar';
import { MobileSidebar } from './components/SidebarView/MobileSidebar';
import { HeaderUserInfo } from './components/HeaderUserInfo';
import { MainContent } from './styled';
import { TitleLogo } from './components/TitleLogo';
import SortIcon from '@mui/icons-material/Sort';

export const Shell = () => {
  const theme = useTheme();
  const mdDownBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState<boolean>(!mdDownBreakpoint);
  const handleToggle = () => setOpen((state) => !state);

  const items = useSideBarItems();

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
            gap: 2,
          }}
        >
          <Stack gap={2} flexDirection="row" alignItems="center">
            {mdDownBreakpoint && (
              <IconButton onClick={handleToggle}>
                <SortIcon
                  sx={{
                    color: ({ palette }) => palette.background.default,
                  }}
                />
              </IconButton>
            )}
            <TitleLogo title="Pet Project" />
          </Stack>
          <Box marginLeft="auto">
            <LocaleSelect />
          </Box>

          <HeaderUserInfo />
        </Container>
      </AppBar>

      <Box sx={{ display: 'flex', flex: 1, height: 'calc(100% - 72px)' }}>
        {mdDownBreakpoint ? (
          <MobileSidebar open={open} onToggle={handleToggle} items={items} />
        ) : (
          <DesktopSidebar open={open} onToggle={handleToggle} items={items} />
        )}

        <MainContent open={open}>
          <Outlet />
        </MainContent>
      </Box>
    </>
  );
};
