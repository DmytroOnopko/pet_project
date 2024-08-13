import {
  Autocomplete,
  Checkbox,
  Chip,
  FormControl,
  FormHelperText,
  TextField,
} from '@mui/material';
import { ReactNode } from 'react';
import { useTypedTranslation } from '../components/hooks/useTypedTranslation';
import { FieldOption } from '../core/types';

interface Props {
  options: FieldOption[];
  selected: FieldOption['value'][];
  onChange(values: FieldOption['value'][]): void;

  label?: ReactNode;
  errorMsg?: string;
  required?: boolean;
  disabled?: boolean;
}

export function MultiSelect({
  label,
  options,
  selected,
  onChange,
  errorMsg,
  required = false,
  disabled = false,
}: Props) {
  const { t } = useTypedTranslation();

  const all: FieldOption = {
    label: t('all'),
    value: 'all',
  };

  const sortedOptions = options.sort((a, b) => a.label.localeCompare(b.label));
  const sortedOptionsWithAll = [all, ...sortedOptions];

  const isAllSelected = selected.includes(all.value);

  const filteredItemsWithAll = sortedOptionsWithAll.filter(
    isAllSelected ? Boolean : ({ value }) => selected.includes(value),
  );

  return (
    <FormControl fullWidth>
      <Autocomplete
        multiple
        disableCloseOnSelect
        disabled={disabled}
        limitTags={2}
        options={sortedOptionsWithAll}
        value={filteredItemsWithAll}
        sx={{
          '& .MuiFormLabel-root > .MuiFormLabel-asterisk': {
            color: ({ palette }) => palette.error.main,
          },
        }}
        onChange={(_, value, reason, details) => {
          const valuesWithAll = sortedOptionsWithAll.map((o) => o.value);

          if (details?.option.value === all.value) {
            const values = reason === 'removeOption' ? [] : valuesWithAll;
            return onChange(values);
          }

          const values = value
            .map((o) => o.value)
            .filter((o) => o !== all.value);
          const isAll = options.length === values.length;

          onChange(isAll ? valuesWithAll : values);
        }}
        renderTags={(tagValue, getTagProps) => {
          if (isAllSelected) {
            const allIndex = tagValue.findIndex(
              (option) => option.value === all.value,
            );

            return (
              <Chip label={all.label} {...getTagProps({ index: allIndex })} />
            );
          }

          return tagValue.map((option, index) => (
            <Chip label={option.label} {...getTagProps({ index })} />
          ));
        }}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option, state, ownerState) => {
          return (
            <li {...props}>
              <Checkbox style={{ marginRight: 8 }} checked={state.selected} />
              {option.label}
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            required={required}
            placeholder={`${t('select')} ${label}`}
          />
        )}
      />
      {errorMsg && <FormHelperText error>{errorMsg}</FormHelperText>}
    </FormControl>
  );
}
