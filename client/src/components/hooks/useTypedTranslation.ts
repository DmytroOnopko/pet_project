import { useTranslation as useI18nTranslation } from 'react-i18next';
import { Locale } from '../../core/types';
import { TFunction } from 'i18next';

type CustomI18n = {
  changeLanguage: (lng: Locale) => Promise<TFunction<'default', string>>; // Keep the correct return type
  language: Locale;
  t: TFunction<'default', string>; // Adjust according to your needs
  // Include any additional properties from the i18n object that you need
};

type CustomUseTranslationResponse = {
  t: TFunction<'default', string>; // Adjust according to your needs
  i18n: CustomI18n;
};

export function useTypedTranslation(): CustomUseTranslationResponse {
  const { t, i18n } = useI18nTranslation<'default', string>();

  return {
    t,
    i18n: {
      ...i18n,
      changeLanguage: (lng: Locale) =>
        i18n.changeLanguage(lng as string) as Promise<
          TFunction<'default', string>
        >,
      language: i18n.language as Locale,
    },
  };
}
