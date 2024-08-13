import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ua from './locales/ua.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      en: {
        translation: en,
      },
      ua: {
        translation: ua,
      },
    },
  });

export default i18n;
