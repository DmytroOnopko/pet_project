import { Box, CSSObject, styled, Theme } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';

const drawerWidth = 240;

const openedStyles = (theme: Theme): CSSObject => ({
  width: `${drawerWidth}px!important`,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedStyles = (theme: Theme): CSSObject => ({
  width: `calc(${theme.spacing(6.875)} + 1px)!important`,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  position: 'relative',

  '& > .MuiDrawer-paper': {
    top: 'initial',
    border: 'none',
    boxShadow: `1px 0px 0px 0px ${theme.palette.divider}`,
    left: 'auto',
  },

  ...openedStyles(theme),
  '& .MuiDrawer-paper': openedStyles(theme),

  ...(!open && {
    ...closedStyles(theme),
    '& .MuiDrawer-paper': closedStyles(theme),
  }),
}));

export const MainContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  flexGrow: 1,
  height: 'calc(100% - 120px)',
  width: `calc(100% - ${drawerWidth}px)`,
  overflow: 'auto',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
