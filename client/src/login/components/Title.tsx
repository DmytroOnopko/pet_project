import { Box, Stack, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const Title = () => (
  <Stack gap={1} display="flex" alignItems="center">
    <Box
      sx={{
        padding: ({ spacing }) => spacing(1),
        background: ({ palette }) => palette.grey[200],
        borderRadius: 25,
        width: 25,
        height: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LockOutlinedIcon />
    </Box>
    <Typography variant="h5">Sign in</Typography>
  </Stack>
);
