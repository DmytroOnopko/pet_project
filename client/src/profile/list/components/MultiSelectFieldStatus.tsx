import React from 'react';
import { Control } from 'react-hook-form';
import { MultiSelectField } from '../../../components/Fields/MultiSelectField';
import { ProfileSearchForm, ProfileStatus } from '../../../profile/list/domain';

interface Props {
  control: Control<ProfileSearchForm>;
}

export const MultiSelectFieldStatus = ({ control }: Props) => {
  return (
    <MultiSelectField
      required
      control={control}
      name={'status'}
      label={'Status'}
      options={options}
    />
  );
};

const options = [
  { value: ProfileStatus.ACTIVE, label: 'Active' },
  { value: ProfileStatus.NOT_ACTIVE, label: 'Not Active' },
  { value: 'Active2', label: 'Active2' },
];
