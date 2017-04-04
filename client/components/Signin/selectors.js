import { createSelector } from 'reselect';

export const selectSigninDomain = () => (state) => state.get('Signin');

const selectSignin = () => createSelector(
  selectSigninDomain(),
  (status) => ({
    status: status.toJS(),
  })
);

export default selectSignin;
