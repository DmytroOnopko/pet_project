import { useTypedTranslation } from '../../../components/hooks/useTypedTranslation';
import { FieldOption, SortDirection } from '../../../core/types';
import { ProfileSearchParams, SortKey } from '../../../profile/list/domain';

interface Props {
  params: ProfileSearchParams;
  saveParams(params: ProfileSearchParams): void;
}

export const useSort = ({ params, saveParams }: Props) => {
  const { t } = useTypedTranslation();

  const items: Record<SortKey, FieldOption<SortKey>> = {
    [SortKey.NAME]: {
      value: SortKey.NAME,
      label: t('name'),
    },
    [SortKey.BIRTHDAY]: {
      value: SortKey.BIRTHDAY,
      label: t('birthday'),
    },
  };

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
