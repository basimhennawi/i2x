import {
  loadReducers as loadLogoutReducers,  // eslint-disable-line no-unused-vars
  loadSagas as loadLogoutSagas,
} from 'components/Logout/dependencies';

export const loadReducers = () => ({
});

export const loadSagas = () => [
  ...loadLogoutSagas(),
];
