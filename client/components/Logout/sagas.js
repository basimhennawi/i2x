import { takeLatest, call } from 'redux-saga/effects';
import authApi from 'apis/auth';
import { LOGOUT } from './constants';

export function* logout() {
  yield call(authApi.logout);
}

let watchLogoutFlag = false;
export function* watchLogout() {
  if (!watchLogoutFlag) {
    yield takeLatest(LOGOUT, logout);
    watchLogoutFlag = true;
  }
}

export default [
  watchLogout,
];
