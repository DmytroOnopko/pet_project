import { Box, Button, Stack, Fade } from '@mui/material';
import { useState } from 'react';

export const StyleSwitcher = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Stack
      sx={{
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        gap: 2,
        flexDirection: 'row-reverse',
      }}
    >
      <Button variant="text" onClick={handleChange}>
        <Box
          sx={{
            height: 50,
            width: 50,
            background: 'red',
          }}
        >
          Img
        </Box>
      </Button>

      <Fade in={checked}>
        <Stack
          sx={{
            background: 'white',
          }}
        >
          text
        </Stack>
      </Fade>
    </Stack>
  );
};
