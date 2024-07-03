import { Box, TablePaginationProps } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';

import { TableProos } from './types';
import { Table } from './Table';

export const TableList = ({
  paginationProps,
  ...tableProps
}: TableProos & { paginationProps: TablePaginationProps }) => {
  return (
    <>
      <Table {...tableProps} />
      <TablePagination
        sx={{
          borderRadius: ({ spacing }) => spacing(0, 0, 1, 1),
          border: ({ palette }) => `1px solid ${palette.divider}`,
          borderTopColor: 'transparent',
          boxSizing: 'border-box',
          marginTop: '-1px',
        }}
        {...paginationProps}
      />
    </>
  );
};
