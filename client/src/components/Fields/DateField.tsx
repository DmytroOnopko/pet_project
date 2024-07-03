import React, { ReactNode } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { DatePicker } from '../../components/DatePicker';

interface Props<Form extends FieldValues> {
  control: Control<Form>;
  name: Path<Form>;

  label?: ReactNode;
  minDate?: Date;
  maxDate?: Date;
  required?: boolean;
  disabled?: boolean;
}

export function DateField<Form extends FieldValues>({
  control,
  maxDate,
  minDate,
  label,
  name,
  required,
  disabled,
}: Readonly<Props<Form>>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState, formState }) => (
        <DatePicker
          label={label}
          value={field.value}
          onChange={field.onChange}
          error={fieldState.error}
          maxDate={maxDate}
          minDate={minDate}
          disabled={disabled || formState.isSubmitting}
          required={required}
        />
      )}
    />
  );
}
