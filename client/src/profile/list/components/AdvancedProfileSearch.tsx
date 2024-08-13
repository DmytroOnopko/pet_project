import React, { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useTypedTranslation } from '../../../components/hooks/useTypedTranslation';
import { MultiSelectFieldStatus } from './MultiSelectFieldStatus';
import { ProfileSearchForm } from '../../../profile/list/domain';
import { DateField } from '../../../components/DateField';
import { Search } from '../../../components/Search';
import { ListAccordionActions } from '../../../components/ListAccordion/ListAccordionActions';
import { ListAccordionLayout } from '../../../components/ListAccordion';

interface Props {
  form: UseFormReturn<ProfileSearchForm>;
  onClear(): void;
  onApply(): void;
}

export const AdvancedProfileSearch = ({ form, onClear, onApply }: Props) => {
  const [search, setSearch] = useState('');
  const { t } = useTypedTranslation();

  return (
    <ListAccordionLayout
      summary={[
        <Search
          key="search"
          label={t('search')}
          value={search}
          onChange={(value) => setSearch(value)}
          onClear={() => setSearch('')}
        />,
      ]}
      details={[
        <MultiSelectFieldStatus
          key="multiSelectFieldStatus"
          control={form.control}
        />,
        <DateField
          required
          key="DateFieldFrom"
          label={t('dateFrom')}
          name="startFrom"
          control={form.control}
        />,
        <DateField
          required
          key="DateFieldTo"
          label={t('dateTo')}
          name="startTo"
          control={form.control}
        />,
      ]}
      actions={<ListAccordionActions onClear={onClear} onApply={onApply} />}
    />
  );
};
