import {
  Table as MuiTable,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCellProps,
  TableCell,
  Typography,
  TableRowProps,
  TypographyProps,
  CircularProgress,
} from '@mui/material';
import { lighten } from '@mui/system/colorManipulator';
import { Children, PropsWithChildren } from 'react';
import { useTypedTranslation } from '../hooks/useTypedTranslation';

import { TableProos } from './types';

export function Table({
  head,
  body,
  tableProps = {},
  headerCellStyles,
  bodyCellStyles,
  isLoading = false,
  isEmpty = false,
}: TableProos) {
  const { sx: headSx, ...restProps } = tableProps;
  console.log(isEmpty);
  return (
    <TableContainer
      {...restProps}
      sx={{
        ...headSx,

        border: ({ palette }) => `1px solid ${palette.divider}`,
        borderRadius: ({ spacing }) => spacing(1, 1, 0, 0),
        boxSizing: 'border-box',
        flex: 1,
        ...(headerCellStyles && { 'th.MuiTableCell-head': headerCellStyles }),
        ...(bodyCellStyles && { 'td.MuiTableCell-body': bodyCellStyles }),
      }}
    >
      <MuiTable
        stickyHeader
        sx={{ ...((isLoading || isEmpty) && { height: '100%' }) }}
      >
        {head && <TableHead>{head}</TableHead>}
        <TableBody>{body}</TableBody>
      </MuiTable>
    </TableContainer>
  );
}

export const HeaderTableRow = (props: TableRowProps) => (
  <TableRow
    sx={{
      verticalAlign: 'baseline',
    }}
  >
    {props.children}
  </TableRow>
);

export const HeaderTableCell = (props: TableCellProps) => (
  <TableCell
    sx={{ borderBottom: ({ palette }) => `1px solid ${palette.divider}` }}
    {...props}
  ></TableCell>
);

export const HeaderTableCellText = (props: TableCellProps) => (
  <HeaderTableCell {...props}>
    <Typography fontSize="13px" fontWeight="bold" whiteSpace="nowrap">
      {props.children}
    </Typography>
  </HeaderTableCell>
);

interface BodyRenderProps extends PropsWithChildren {
  empty?: JSX.Element;
  loading?: boolean;
}

export const TableBodyRender = ({
  empty = <TableEmpty />,
  loading = false,
  children,
}: BodyRenderProps) => {
  return (
    <>
      {loading ? (
        <TableLoading />
      ) : Children.count(children) === 0 ? (
        empty
      ) : (
        children
      )}
    </>
  );
};

export const BodyRow = (props: TableRowProps) => (
  <TableRow
    sx={{
      verticalAlign: 'middle',

      '&:nth-of-type(odd)': {
        background: ({ palette }) => lighten(palette.divider, 0.6),
      },
      '& .MuiTableCell-root': {
        borderBottom: ({ palette }) => `1px solid ${palette.divider}`,
      },
    }}
    {...props}
  >
    {props.children}
  </TableRow>
);

export const TableDataCell = ({
  typographyProps,
  ...props
}: TableCellProps & { typographyProps?: TypographyProps }) => (
  <TableCell {...props}>
    <Typography {...typographyProps} fontSize="12px" textAlign="start">
      {props.children}
    </Typography>
  </TableCell>
);

const TableEmpty = () => {
  const { t } = useTypedTranslation();

  return (
    <BodyRow
      sx={{
        background: 'transparent',
      }}
    >
      <TableDataCell
        colSpan={6}
        typographyProps={{
          sx: {
            textAlign: 'center',
            color: ({ palette }) => palette.text.disabled,
            fontWeight: 700,
          },
        }}
        sx={{
          borderBottom: 'none',
        }}
      >
        {t('emptyData')}
      </TableDataCell>
    </BodyRow>
  );
};

const TableLoading = () => (
  <BodyRow
    sx={{
      background: 'transparent',
    }}
  >
    <TableCell
      colSpan={6}
      sx={{
        textAlign: 'center',
        borderBottom: 'none',
      }}
    >
      <CircularProgress />
    </TableCell>
  </BodyRow>
);
