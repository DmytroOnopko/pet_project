import { Box, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useTypedTranslation } from '../components/hooks/useTypedTranslation';
import { Locale } from '../core/types';

export const LocaleSelect = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTypedTranslation();

  const items: Record<Locale, string> = {
    [Locale.EN]: t('locale_en'),
    [Locale.UA]: t('locale_ua'),
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleSelect = (locale: Locale) => {
    changeLanguage(locale);
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        color="inherit"
        variant="text"
        size="small"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        {items[language]}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          selected={language === Locale.EN}
          onClick={() => handleSelect(Locale.EN)}
        >
          {t('locale_en')}
        </MenuItem>
        <MenuItem
          selected={language === Locale.UA}
          onClick={() => handleSelect(Locale.UA)}
        >
          {t('locale_ua')}
        </MenuItem>
      </Menu>
    </Box>
  );
};
