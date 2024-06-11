import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {
  Box,
  Collapse,
  Fade,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { lighten } from '@mui/system/colorManipulator';
import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Paths } from '../paths';

interface SideBarItem {
  path: Paths;
  title: ReactNode;
  icon: ReactNode;
  children?: Omit<SideBarItem, 'icon'>[];
}

interface Props {
  items?: SideBarItem[];
  open?: boolean;
}

export const SideBarItemList = ({ items = [], open = false }: Props) => {
  const location = useLocation();

  return (
    <ParentList items={items} open={open}>
      {(props) => (
        <Collapse
          in={open && props?.some((i) => location.pathname?.includes(i.path))}
          unmountOnExit
        >
          <ChildrenList children={props} />
        </Collapse>
      )}
    </ParentList>
  );
};

interface ParentListProps extends Props {
  children?: (props: SideBarItem['children']) => ReactNode;
}

const ParentList = ({
  items = [],
  open = false,
  children,
}: ParentListProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <List>
      {items.map((item) => {
        const isActive = location.pathname?.includes(item.path);

        return (
          <ListItem
            key={item.path}
            disablePadding
            sx={{ display: 'block', position: 'relative' }}
          >
            <ListItemButton
              sx={{
                justifyContent: open ? 'initial' : 'center',
              }}
              onClick={() => navigate(item.path)}
              selected={isActive}
            >
              <ActiveParent show={isActive} />

              <ListItemIcon
                sx={{
                  minWidth: 'auto',
                  mr: open ? 2 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                sx={{
                  opacity: open ? 1 : 0,
                  m: 0,
                }}
              >
                {item.title}
              </ListItemText>
            </ListItemButton>

            <>{children?.(item.children)}</>
          </ListItem>
        );
      })}
    </List>
  );
};

interface ChildrenListProps {
  children: SideBarItem['children'];
}

const ChildrenList = ({ children }: ChildrenListProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <List disablePadding>
      {children?.map((children) => (
        <ListItemButton
          key={children.path}
          onClick={() => navigate(children.path)}
        >
          <ListItemIcon
            sx={{
              width: 24,
              minWidth: 'auto',
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ActiveChild show={children.path === location.pathname} />
          </ListItemIcon>
          <ListItemText>{children.title}</ListItemText>
        </ListItemButton>
      ))}
    </List>
  );
};

const ActiveParent = ({ show }: { show: boolean }) => {
  return (
    <Fade in={show}>
      <Box
        sx={{
          background: ({ palette }) => lighten(palette.primary.main, 0.3),
          width: 4,
          height: '100%',
          position: 'absolute',
          left: 0,
        }}
      />
    </Fade>
  );
};

const ActiveChild = ({ show }: { show: boolean }) => {
  return (
    <Fade in={show}>
      <Box
        sx={{
          background: ({ palette }) => lighten(palette.error.main, 0.3),
          width: 8,
          height: 8,
          borderRadius: 8,
        }}
      />
    </Fade>
  );
};
