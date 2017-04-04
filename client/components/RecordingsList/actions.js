import {
  FETCH_RECORDINGS,
  FETCH_RECORDINGS_SUCCESS,
  FETCH_RECORDINGS_FAILURE,
} from './constants';

export const fetchRecordings = () => ({
  type: FETCH_RECORDINGS,
});

export const fetchRecordingsSuccess = (list) => ({
  type: FETCH_RECORDINGS_SUCCESS,
  list,
});

export const fetchRecordingsFailure = (error) => ({
  type: FETCH_RECORDINGS_FAILURE,
  error,
});
