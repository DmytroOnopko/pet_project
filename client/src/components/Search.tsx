import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, InputAdornment, TextField } from '@mui/material';

interface SearchProps {
  label: string;
  value: string;
  onChange(value: string): void;
  onClear(): void;
}

export const Search = ({ label, value, onClear, onChange }: SearchProps) => {
  return (
    <TextField
      fullWidth
      value={value}
      label={label}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        endAdornment: value ? (
          <InputAdornment position="end">
            <IconButton onClick={onClear} edge="end" size="small">
              <ClearIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ) : undefined,
      }}
    />
  );
};
