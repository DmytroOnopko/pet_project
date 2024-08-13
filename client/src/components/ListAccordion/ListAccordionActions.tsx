import { AccordionActions as MuiAccordionActions, Button } from '@mui/material';
import { useTypedTranslation } from '../hooks/useTypedTranslation';

export const ListAccordionActions = ({
  onApply,
  onClear,
}: {
  onClear(): void;
  onApply(): void;
}) => {
  const { t } = useTypedTranslation();

  return (
    <MuiAccordionActions
      sx={{
        '& .MuiButtonBase-root': { textTransform: 'capitalize' },
        width: { md: 'auto', sm: '50%', xs: '100%' },
      }}
    >
      <Button variant="outlined" color="error" onClick={onClear} fullWidth>
        {t('clear')}
      </Button>
      <Button variant="outlined" onClick={onApply} fullWidth>
        {t('apply')}
      </Button>
    </MuiAccordionActions>
  );
};
