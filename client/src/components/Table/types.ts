import { SxProps, TableProps } from '@mui/material';

export interface TableProos {
  head?: React.ReactNode;
  body: React.ReactNode;
  tableProps?: TableProps;
  headerCellStyles?: SxProps;
  bodyCellStyles?: SxProps;
  isLoading?: boolean;
  isEmpty?: boolean;
}
