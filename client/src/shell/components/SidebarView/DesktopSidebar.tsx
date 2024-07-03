import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Stack } from '@mui/material';
import { SideBarItem } from '../types';

import { SideBarItemList } from '../SideBarItemList';
import { Drawer } from '../../styled';

interface Props {
  open: boolean;
  onToggle(): void;
  items: SideBarItem[];
}

export const DesktopSidebar = ({ items, ...props }: Props) => {
  return (
    <Stack gap={2}>
      <Drawer variant="permanent" open={props.open} sx={{ flex: 1 }}>
        <SideBarItemList open={props.open} items={items} />
      </Drawer>
      <ToggleButton {...props} />
    </Stack>
  );
};

const ToggleButton = ({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle(): void;
}) => (
  <Button
    onClick={onToggle}
    color="inherit"
    variant="outlined"
    sx={{
      width: 40,
      minWidth: 'auto',
      margin: ({ spacing }) => spacing(1),
      marginLeft: 'auto',
      padding: ({ spacing }) => spacing(0.5),
      zIndex: (theme) => theme.zIndex.drawer,
      borderColor: ({ palette }) => palette.text.disabled,

      '& .MuiSvgIcon-root': {
        color: ({ palette }) => palette.text.disabled,
      },
    }}
  >
    {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
  </Button>
);
