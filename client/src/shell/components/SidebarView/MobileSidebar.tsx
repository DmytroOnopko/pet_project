import { Drawer } from '@mui/material';

import { SideBarItemList } from '../SideBarItemList';
import { SideBarItem } from '../types';

interface Props {
  open: boolean;
  onToggle(): void;
  items: SideBarItem[];
}

export const MobileSidebar = ({ open, onToggle, items }: Props) => (
  <Drawer
    open={open}
    onClose={onToggle}
    sx={{ '& .MuiPaper-root': { minWidth: 250 } }}
  >
    <SideBarItemList open={open} items={items} />
  </Drawer>
);
