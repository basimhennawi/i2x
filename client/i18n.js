/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';

import enLocaleData from 'react-intl/locale-data/en';
import enTranslationMessages from './translations/en.json';

export const appLocales = [
  'en',
];

addLocaleData([...enLocaleData]);

const formatTranslationMessages = (messages) => {
  const formattedMessages = {};

  messages.forEach((message) => {
    formattedMessages[message.id] = message.message || message.defaultMessage;
  });

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages(enTranslationMessages),
};
