import { AccordionActions as MuiAccordionActions, Button } from '@mui/material';

export const ListAccordionActions = ({
  onApply,
  onClear,
}: {
  onClear(): void;
  onApply(): void;
}) => (
  <MuiAccordionActions
    sx={{
      '& .MuiButtonBase-root': { textTransform: 'capitalize' },
      width: { md: 'auto', sm: '50%', xs: '100%' },
    }}
  >
    <Button variant="outlined" color="error" onClick={onClear} fullWidth>
      Clear
    </Button>
    <Button variant="outlined" onClick={onApply} fullWidth>
      Apply
    </Button>
  </MuiAccordionActions>
);
