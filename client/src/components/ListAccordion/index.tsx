import {
  Accordion,
  AccordionActions as MuiAccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
} from '@mui/material';
import { Children, ReactNode, useState } from 'react';

interface Props {
  summary: ReactNode[];
  details: ReactNode[];
  actions: ReactNode;
}

export const ListAccordionLayout = ({ actions, summary, details }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded((prevState) => !prevState);

  const updatedSummary =
    summary.length >= 4
      ? [
          ...summary.slice(0, summary.length - 1),
          <ExpandButton onExpand={handleToggle} expand={expanded} />,
          ...summary.slice(summary.length - 1),
        ]
      : [
          ...summary,
          <ExpandButton
            onExpand={handleToggle}
            expand={expanded}
            isEmpty={!!summary.length}
          />,
        ];

  return (
    <Accordion expanded={expanded}>
      <AccordionSummary
        sx={{
          '&.Mui-focusVisible': {
            background: 'transparent',
          },
          '& .MuiAccordionSummary-content': {
            display: 'flex',
            justifyContent: 'space-between',
          },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            alignItems: 'center',
            ...(summary.length < 2 && { justifyContent: 'space-between' }),
          }}
        >
          {Children.map(updatedSummary, (child) => (
            <Grid item key={`summary_${Date.now().valueOf()}`} xs={12} md={3}>
              {child}
            </Grid>
          ))}
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {Children.map(details, (child, index) => (
            <Grid item key={`details_${Date.now().valueOf()}`} xs={12} md={3}>
              {child}
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
      <MuiAccordionActions
        sx={{
          '& .MuiButtonBase-root': { textTransform: 'capitalize' },
        }}
      >
        {actions}
      </MuiAccordionActions>
    </Accordion>
  );
};

const ExpandButton = ({
  onExpand,
  expand,
  isEmpty = false,
}: {
  onExpand(): void;
  expand: boolean;
  isEmpty?: boolean;
}) => (
  <Box
    sx={{
      width: '100%',
      textAlign: isEmpty ? 'right' : 'left',
    }}
  >
    <Button
      onClick={onExpand}
      sx={{
        textTransform: 'capitalize',
        borderColor: ({ palette }) => palette.text.disabled,
        color: ({ palette }) => palette.text.disabled,
        width: { xs: '50%', sm: '25%', md: 'auto' },
      }}
      color="inherit"
      variant="outlined"
    >
      {expand ? 'Collapse' : 'Expand'}
    </Button>
  </Box>
);
