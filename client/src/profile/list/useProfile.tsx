import { SortDirection } from '../../core/types';
import { useSort } from '../../profile/list/services/useSort';
import {
  ArrayParams,
  NumberParam,
  StringParam,
  useSearchParamsState,
} from '../../components/hooks/useSearchParamsState';
import { ProfileSearchParams, SortKey } from '../../profile/list/domain';
import { useForm } from './services/useForm';

export const useProfile = () => {
  const { params, saveParams } = useSearchParamsState<ProfileSearchParams>([
    ArrayParams('status', ['all']),
    NumberParam('startTo', Date.now().valueOf()),
    NumberParam('startFrom', Date.now().valueOf()),

    StringParam('sortKey', SortKey.NAME),
    StringParam('sortDirection', SortDirection.DESC),
  ]);

  const form = useForm({
    params,
    saveParams,
  });

  const sort = useSort({
    params,
    saveParams,
  });

  return {
    form,
    sort,
  };
};
