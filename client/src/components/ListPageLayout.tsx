import { Box, Container, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Paths } from '../shell/paths';
import { Breadcrumbs } from '../components/Breadcrumbs';

type Props = {
  title: ReactNode;
  list: ReactNode;

  actions?: ReactNode;
  search?: ReactNode;
  sort?: ReactNode;
  breadcrumbs?: { title: string; to?: Paths }[];
};

export const ListPageLayout = ({
  title,
  actions,
  search,
  sort,
  list,
  breadcrumbs = [],
}: Props) => {
  return (
    <Container
      sx={{
        padding: ({ spacing }) => spacing(3, 2),
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
      disableGutters
      maxWidth={false}
    >
      {!!breadcrumbs?.length && <Breadcrumbs items={breadcrumbs} />}

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

      {search && <Box>{search}</Box>}

      {sort && (
        <Box display="flex" justifyContent="end">
          {sort}
        </Box>
      )}

      <Stack flexDirection="column" flex={1}>
        {list}
      </Stack>
    </Container>
  );
};
