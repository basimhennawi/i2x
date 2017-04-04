import { createSelector } from 'reselect';

export const selectLocaleSelector = () => (state) => state.get('locale');

export const selectCurrentLocale = () => createSelector(
  selectLocaleSelector(),
  (locale) => locale.get('current')
);
