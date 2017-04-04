import { takeLatest, call, put } from 'redux-saga/effects';
import recordingsApi from 'apis/recordings';
import { FETCH_RECORDINGS } from './constants';
import {
  fetchRecordingsSuccess,
  fetchRecordingsFailure,
} from './actions';

export function* fetchRecordings() {
  try {
    const response = yield call(recordingsApi.all);
    if (!response.results) {
      if (response.detail) throw response.detail;
      throw 'Unknown error'; // eslint-disable-line no-throw-literal
    }
    yield put(fetchRecordingsSuccess(response.results));
  } catch (e) {
    yield put(fetchRecordingsFailure(e));
  }
}

let watchRecordingsList = false;
export function* watchFetchRecordings() {
  if (!watchRecordingsList) {
    yield takeLatest(FETCH_RECORDINGS, fetchRecordings);
    watchRecordingsList = true;
  }
}

export default [
  watchFetchRecordings,
];
