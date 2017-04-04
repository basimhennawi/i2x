import { takeLatest, call, put } from 'redux-saga/effects';
import authApi from 'apis/auth';
import { SIGNIN_WITH_EMAIL } from './constants';
import {
  signinWithEmailSuccess,
  signinWithEmailFailure,
} from './actions';

export function* signinWithEmail({ payload: { email, password } }) {
  try {
    const response = yield call([authApi, authApi.login], {
      email,
      password,
    });
    if (response.non_field_errors) throw response.non_field_errors[0];
    yield put(signinWithEmailSuccess(response.token));
  } catch (error) {
    yield put(signinWithEmailFailure(error));
  }
}

let watchSignin = false;
export function* watchSigninWithEmail() {
  if (!watchSignin) {
    yield takeLatest(SIGNIN_WITH_EMAIL, signinWithEmail);
    watchSignin = true;
  }
}

export default [
  watchSigninWithEmail,
];
