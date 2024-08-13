import { alpha, Button, Stack, Typography } from '@mui/material';
import { useTypedTranslation } from '../components/hooks/useTypedTranslation';
import { FieldOption, SortDirection } from '../core/types';
import { SortKey } from '../profile/list/domain';
import { Select } from '../components/Select';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface Props {
  items: FieldOption<SortKey>[];
  sortKey: FieldOption<SortKey>;
  sortDirection: SortDirection;
  onChange(
    sortKey: FieldOption<SortKey>['value'],
    sortDirection: SortDirection,
  ): void;
}

export const Sort = ({ items, onChange, sortKey, sortDirection }: Props) => {
  const { t } = useTypedTranslation();

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        gap: 1,
        width: 250,
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          whiteSpace: 'nowrap',
          typography: 'body2',
        }}
      >
        {t('sortBy')}
      </Typography>
      <Direction
        sortDirection={sortDirection}
        onClick={() =>
          onChange(
            sortKey.value,
            sortDirection === SortDirection.ASC
              ? SortDirection.DESC
              : SortDirection.ASC,
          )
        }
      />
      <Select
        options={items}
        onChange={(value) =>
          onChange(value as FieldOption<SortKey>['value'], sortDirection)
        }
        value={sortKey}
        ComponentProps={{
          size: 'small',
        }}
      />
    </Stack>
  );
};

const Direction = ({
  sortDirection,
  onClick,
}: {
  sortDirection: SortDirection;
  onClick(): void;
}) => (
  <Button
    variant="outlined"
    color="inherit"
    onClick={onClick}
    startIcon={
      sortDirection === SortDirection.ASC ? (
        <ArrowUpwardIcon />
      ) : (
        <ArrowDownwardIcon />
      )
    }
    sx={{
      p: 1,
      minWidth: 40,
      height: 40,
      borderColor: ({ palette }) => alpha(palette.common.black, 0.231),

      '&:hover': {
        borderColor: ({ palette }) => alpha(palette.common.black, 0.871),
      },

      '& .MuiButton-startIcon': { m: 0 },
    }}
  />
);
