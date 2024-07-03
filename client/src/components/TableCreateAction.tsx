import { ReactNode } from 'react';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface ButtonProps {
  title: ReactNode;
  onClick(): void;
}

export const TableCreateAction = (props: ButtonProps) => {
  const theme = useTheme();
  const mdDownBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

  return mdDownBreakpoint ? (
    <MobileButton onClick={props.onClick} />
  ) : (
    <DesktopButton {...props} />
  );
};

const DesktopButton = ({ title, onClick }: ButtonProps) => (
  <Button
    variant="contained"
    sx={{
      textTransform: 'capitalize',
    }}
    onClick={onClick}
  >
    {title}
  </Button>
);

const MobileButton = ({ onClick }: Omit<ButtonProps, 'title'>) => (
  <Button
    variant="contained"
    sx={{
      textTransform: 'capitalize',
      padding: 1,
      borderRadius: 30,
      minWidth: 'auto',
    }}
    onClick={onClick}
  >
    <AddIcon />
  </Button>
);
