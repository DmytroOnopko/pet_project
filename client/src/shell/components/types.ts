import { ReactNode } from 'react';
import { Paths } from '../paths';

export interface SideBarItem {
  path: Paths;
  title: ReactNode;
  icon: ReactNode;
  children?: Omit<SideBarItem, 'icon'>[];
}
