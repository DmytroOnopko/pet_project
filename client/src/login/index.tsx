import React from 'react';
import { Stack } from '@mui/material';
import { Title } from './components/Title';
import { Button } from './components/Button';
import { useForm } from './services/useForm';
import { Password } from './components/Fields/Password';
import { Email } from './components/Fields/Email';

export const Login = () => {
  const { control, handleSubmit } = useForm({
    onSubmit: (credential) => null,
  });

  return (
    <Stack width="100%" height="100%">
      <Stack
        sx={{
          width: { xs: 'calc(100% - 32px)', sm: 320 },
          gap: 2,
          m: '150px auto',
          p: ({ spacing }) => spacing(2),
        }}
      >
        <Title />
        <Email control={control} />
        <Password control={control} />
        <Button onClick={handleSubmit} />
      </Stack>
    </Stack>
  );
};
