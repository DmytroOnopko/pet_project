import React from 'react';
import { Control } from 'react-hook-form';
import { useTypedTranslation } from '../../../components/hooks/useTypedTranslation';
import { MultiSelectField } from '../../../components/MultiSelectField';
import { ProfileSearchForm, ProfileStatus } from '../../../profile/list/domain';

interface Props {
  control: Control<ProfileSearchForm>;
}

export const MultiSelectFieldStatus = ({ control }: Props) => {
  const { t } = useTypedTranslation();

  const options = [
    { value: ProfileStatus.ACTIVE, label: t('active') },
    { value: ProfileStatus.NOT_ACTIVE, label: t('notActive') },
  ];

  return (
    <MultiSelectField
      required
      control={control}
      name={'status'}
      label={t('status')}
      options={options}
    />
  );
};
