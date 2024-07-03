import { Button as MuiButton, ButtonProps } from '@mui/material';

export const Button = ({ ...props }: ButtonProps) => (
  <MuiButton
    variant="contained"
    sx={{
      mt: 1,
      ...props.sx,
    }}
    {...props}
  >
    Sign in
  </MuiButton>
);
