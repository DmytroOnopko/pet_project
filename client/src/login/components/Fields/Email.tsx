import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { LoginForm } from '../../domain';

interface Props {
  control: Control<LoginForm>;
}

export const Email = ({ control }: Props) => (
  <Controller
    control={control}
    name={'email'}
    render={({ field, fieldState, formState }) => (
      <TextField
        required
        label="Email"
        variant="outlined"
        value={field.value}
        onChange={field.onChange}
        error={!!fieldState.error}
        disabled={formState.isSubmitting}
        helperText={fieldState.error?.message}
        sx={{
          '& .MuiFormLabel-root > .MuiFormLabel-asterisk': {
            color: ({ palette }) => palette.error.main,
          },
        }}
      />
    )}
  />
);
