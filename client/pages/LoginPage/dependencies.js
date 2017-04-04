import {
  loadReducers as loadSigninReducers,
  loadSagas as loadSigninSagas,
} from 'components/Signin/dependencies';

export const loadReducers = () => ({
  ...loadSigninReducers(),
});

export const loadSagas = () => [
  ...loadSigninSagas(),
];
