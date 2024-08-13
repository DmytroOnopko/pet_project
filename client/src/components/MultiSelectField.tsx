import { ReactNode } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { FieldOption } from '../core/types';
import { MultiSelect } from '../components/MultiSelect';

interface Props<Form extends FieldValues> {
  control: Control<Form>;
  name: Path<Form>;
  options: FieldOption[];

  label?: ReactNode;
  required?: boolean;
  disabled?: boolean;
}

export function MultiSelectField<Form extends FieldValues>({
  control,
  name,
  label,
  required,
  disabled,
  options,
}: Readonly<Props<Form>>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <MultiSelect
          label={label}
          selected={field.value}
          onChange={field.onChange}
          errorMsg={fieldState.error?.message}
          required={required}
          disabled={disabled}
          options={options}
        />
      )}
    />
  );
}
