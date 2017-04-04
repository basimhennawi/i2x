import {
  SIGNIN_WITH_EMAIL,
  SIGNIN_WITH_EMAIL_SUCCESS,
  SIGNIN_WITH_EMAIL_FAILURE,
} from './constants';

export const signinWithEmail = (email, password) => ({
  type: SIGNIN_WITH_EMAIL,
  payload: {
    email,
    password,
  },
});

export const signinWithEmailSuccess = (userId) => ({
  type: SIGNIN_WITH_EMAIL_SUCCESS,
  userId,
});

export const signinWithEmailFailure = (error) => ({
  type: SIGNIN_WITH_EMAIL_FAILURE,
  error,
});
