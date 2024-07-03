import {
  Autocomplete,
  AutocompleteProps,
  FormControl,
  FormHelperText,
  TextField,
} from '@mui/material';
import React, { ReactNode } from 'react';
import { FieldOption } from '../core/types';

interface Props {
  options: FieldOption[];
  value: FieldOption;
  onChange(value: FieldOption['value']): void;

  label?: ReactNode;
  errorMsg?: string;
  required?: boolean;
  disabled?: boolean;

  ComponentProps?: Partial<AutocompleteProps<FieldOption, false, true, false>>;
}

export function Select({
  options,
  value,
  onChange,
  label = '',
  errorMsg = '',
  required = false,
  disabled = false,
  ComponentProps = {},
}: Props) {
  const sortedOptions = [
    ...options.sort((a, b) => a.label.localeCompare(b.label)),
  ];

  return (
    <FormControl fullWidth>
      <Autocomplete
        disableClearable
        disabled={disabled}
        options={sortedOptions}
        value={value}
        sx={{
          '& .MuiFormLabel-root > .MuiFormLabel-asterisk': {
            color: ({ palette }) => palette.error.main,
          },
        }}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        onChange={(_, option) => {
          onChange(option.value);
        }}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option, state, ownerState) => {
          return <li {...props}>{option.label}</li>;
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            required={required}
            placeholder={`Select ${label}`}
          />
        )}
        {...ComponentProps}
      />
      {errorMsg && <FormHelperText error>{errorMsg}</FormHelperText>}
    </FormControl>
  );
}
