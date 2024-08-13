import { FormControl, FormHelperText } from '@mui/material';
import {
  DatePicker as MuiDatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { toDate } from 'date-fns';
import { ReactNode } from 'react';
import { ControllerFieldState } from 'react-hook-form';
import { Milliseconds } from '../core/types';

interface Props {
  value: Milliseconds | null;
  onChange(date: number | null): void;

  required?: boolean;
  label?: ReactNode;
  error?: ControllerFieldState['error'];
  disableFuture?: boolean;
  disabled?: boolean;
  maxDate?: Date;
  minDate?: Date;
}

export const DatePicker = ({
  label,
  value,
  onChange,
  error,
  maxDate,
  minDate,
  disableFuture = true,
  disabled = false,
  required = false,
}: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormControl fullWidth>
        <MuiDatePicker
          label={label}
          value={toNullableDate(value)}
          onChange={(date) => onChange(date ? date.valueOf() : null)}
          maxDate={maxDate}
          minDate={minDate}
          disableFuture={disableFuture}
          disabled={disabled}
          slotProps={{
            textField: { required, disabled },
          }}
          sx={{
            '& .MuiFormLabel-root > .MuiFormLabel-asterisk': {
              color: ({ palette }) => palette.error.main,
            },
          }}
        />
        {error && <FormHelperText error>{error.message}</FormHelperText>}
      </FormControl>
    </LocalizationProvider>
  );
};

function toNullableDate(
  date: Props['value'],
): ReturnType<typeof toDate> | null {
  if (!date) return null;

  return toDate(date);
}
