import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { useTypedTranslation } from '../../../components/hooks/useTypedTranslation';
import { LoginForm } from '../../domain';

interface Props {
  control: Control<LoginForm>;
}

export const Password = ({ control }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTypedTranslation();

  return (
    <Controller
      control={control}
      name={'password'}
      render={({ field, fieldState, formState }) => (
        <TextField
          required
          label={t('password')}
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((state) => !state)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
