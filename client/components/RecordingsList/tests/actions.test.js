import expect from 'expect';
import {
  fetchRecordings,
  fetchRecordingsSuccess,
  fetchRecordingsFailure,
} from '../actions';
import {
  FETCH_RECORDINGS,
  FETCH_RECORDINGS_SUCCESS,
  FETCH_RECORDINGS_FAILURE,
} from '../constants';

const list = [{
  language: 'en-GB',
  final_script: 'abc',
  created: '2017-02-21T09:50:21.441815Z',
  rating: 2,
  duration: 1575,
  url: 'https://s3.eu-central-1.amazonaws.com/linementor-upload-chromex/challenge/181.mp3',
}, {
  language: 'en-GB',
  final_script: 'xyz',
  created: '2017-02-21T09:57:31.942603Z',
  rating: 1,
  duration: 3283,
  url: 'https://s3.eu-central-1.amazonaws.com/linementor-upload-chromex/challenge/3921.mp3',
}];
const error = 404;

describe('RecordingsList actions', () => {
  it('should return object with type equals to fetchRecordings constant', () => {
    expect(fetchRecordings()).toEqual({
      type: FETCH_RECORDINGS,
    });
  });

  it('should return object with type equals to fetchRecordingsSuccess constant, and recordings', () => {
    expect(fetchRecordingsSuccess(list)).toEqual({
      type: FETCH_RECORDINGS_SUCCESS,
      list,
    });
  });

  it('should return object with type equals to fetchRecordingsFailure constant, and error', () => {
    expect(fetchRecordingsFailure(error)).toEqual({
      type: FETCH_RECORDINGS_FAILURE,
      error,
    });
  });
});
