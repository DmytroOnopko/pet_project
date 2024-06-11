import { Box, Container, Typography } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  title: ReactNode;
  list: ReactNode;

  breadcrumbs?: ReactNode;
  actions?: ReactNode;
  search?: ReactNode;
  sort?: ReactNode;
  pagination?: ReactNode;
};

export const ListPageLayout = ({
  title,
  actions,
  search,
  sort,
  list,
  pagination,
  breadcrumbs,
}: Props) => {
  return (
    <Container
      sx={{
        padding: ({ spacing }) => spacing(3, 2),
      }}
      disableGutters
      maxWidth={false}
    >
      {breadcrumbs && <Box mb={2}>{breadcrumbs}</Box>}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Typography variant="h1" fontWeight={700} fontSize={24}>
          {title}
        </Typography>
        <Box display="flex" flexWrap="wrap" gap="8px" justifyContent="end">
          {actions}
        </Box>
      </Box>

      {search && <Box mt={2}>{search}</Box>}

      {sort && (
        <Box display="flex" justifyContent="end" mt={2}>
          {sort}
        </Box>
      )}

      <Box mt={1}>{list}</Box>

      {pagination}
    </Container>
  );
};

// const Container = styled(Box)`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   padding: ${({ theme }) => theme.spacing(3, 2, 0)};
// `;
