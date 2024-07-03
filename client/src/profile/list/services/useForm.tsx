import { useForm as useReactHookForm } from 'react-hook-form';
import { ProfileSearchForm, ProfileSearchParams } from '../domain';

interface Props {
  params: ProfileSearchParams;
  saveParams(params: ProfileSearchParams): void;
}

export const useForm = ({ params, saveParams }: Props) => {
  const form = useReactHookForm<ProfileSearchForm>({
    defaultValues: {
      startFrom: params.startFrom,
      startTo: params.startTo,
      status: params.status,
    },
  });

  const onApply = () => {
    const config = form.getValues();
    saveParams({
      ...params,
      ...config,
    });
  };

  const onClear = () => {
    form.reset();
    saveParams({
      ...params,
      ...defaultParams,
    });
  };
  return {
    form,
    onApply,
    onClear,
  };
};

export const defaultParams: Partial<ProfileSearchForm> = {
  status: undefined,
  startTo: undefined,
  startFrom: undefined,
};
