import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Button } from '@mui/material';
import { lighten } from '@mui/system/colorManipulator';

import { useSideBarItems } from './useSideBarItems';
import { SideBarItemList } from '../../shell/components/SideBarItemList';
import { Drawer } from '../../shell/styled';

interface Props {
  open: boolean;
  onToggle(): void;
}

export const SideBar = (props: Props) => {
  const items = useSideBarItems();

  return (
    <Box sx={{ position: 'relative' }}>
      <ToggleButton {...props} />

      <Drawer variant="permanent" open={props.open}>
        <SideBarItemList open={props.open} items={items} />
      </Drawer>
    </Box>
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
    color="primary"
    variant="contained"
    sx={{
      position: 'absolute',
      zIndex: (theme) => theme.zIndex.modal,
      right: '-16px',
      top: '-16px',
      minWidth: 'auto',
      padding: ({ spacing }) => spacing(0.5),
      borderRadius: '40px',
      background: ({ palette }) => lighten(palette.primary.main, 0.2),

      '&:hover': {
        background: ({ palette }) => lighten(palette.primary.main, 0.1),
      },
    }}
  >
    {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
  </Button>
);
