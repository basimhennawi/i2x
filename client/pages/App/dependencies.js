import {
  loadReducers as loadLogoutReducers,  // eslint-disable-line no-unused-vars
  loadSagas as loadLogoutSagas,
} from 'components/Logout/dependencies';

import {
  loadReducers as loadSigninReducers,
  loadSagas as loadSigninSagas,
} from 'components/Signin/dependencies';

export const loadReducers = () => ({
  ...loadSigninReducers(),
});

export const loadSagas = () => [
  ...loadSigninSagas(),
  ...loadLogoutSagas(),
];
