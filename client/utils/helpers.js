import moment from 'moment';
import { DEFAULT_LOCALE } from 'modules/locale/constants';

export const formatDate = (date, format, locale) => {
  let myLocale = locale;
  if (!myLocale) myLocale = DEFAULT_LOCALE;
  const localLocale = moment(date);
  return localLocale.locale(myLocale).format(format);
};

export const convertSecsToMins = (secs) => {
  if (!secs) return 0;
  return Math.floor(secs / 60);
};
