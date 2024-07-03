import { FieldOption, SortDirection } from '../../../core/types';
import { ProfileSearchParams, SortKey } from '../../../profile/list/domain';

interface Props {
  params: ProfileSearchParams;
  saveParams(params: ProfileSearchParams): void;
}

export const useSort = ({ params, saveParams }: Props) => {
  return {
    items: (Object.keys(items) as SortKey[]).map((key) => items[key]),
    sortKey: items[params.sortKey],
    sortDirection: params.sortDirection,
    onChange: (
      sortKey: FieldOption<SortKey>['value'],
      sortDirection: SortDirection,
    ) => {
      saveParams({
        ...params,
        sortKey,
        sortDirection,
      });
    },
  };
};

const items: Record<SortKey, FieldOption<SortKey>> = {
  [SortKey.NAME]: {
    value: SortKey.NAME,
    label: SortKey.NAME,
  },
  [SortKey.BIRTHDAY]: {
    value: SortKey.BIRTHDAY,
    label: SortKey.BIRTHDAY,
  },
};
