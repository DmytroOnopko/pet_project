import React, { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { MultiSelectFieldStatus } from './MultiSelectFieldStatus';
import { ProfileSearchForm } from '../../../profile/list/domain';
import { DateField } from '../../../components/Fields/DateField';
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

  return (
    <ListAccordionLayout
      summary={[
        <Search
          key="search"
          label="Search"
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
          label="Date From"
          name="startFrom"
          control={form.control}
        />,
        <DateField
          required
          key="DateFieldTo"
          label="Date To"
          name="startTo"
          control={form.control}
        />,
      ]}
      actions={<ListAccordionActions onClear={onClear} onApply={onApply} />}
    />
  );
};
