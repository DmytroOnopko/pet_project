import { Button as MuiButton, ButtonProps } from '@mui/material';
import { useTypedTranslation } from '../../components/hooks/useTypedTranslation';

export const Button = ({ ...props }: ButtonProps) => {
  const { t } = useTypedTranslation();

  return (
    <MuiButton
      variant="contained"
      sx={{
        mt: 1,
        ...props.sx,
      }}
      {...props}
    >
      {t('signIn')}
    </MuiButton>
  );
};
