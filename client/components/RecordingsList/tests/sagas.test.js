import expect from 'expect';
import { call, put } from 'redux-saga/effects';
import recordingsApi from 'apis/recordings';
import { fetchRecordings } from '../sagas';
import {
  fetchRecordingsSuccess,
  fetchRecordingsFailure,
} from '../actions';

const list = [{
  language: 'en-GB',
  final_script: 'abc',
  created: '2017-02-21T09:50:21.441815Z',
  rating: 2,
  duration: 1575,
  url: 'https://s3.eu-central-1.amazonaws.com/linementor-upload-chromex/challenge/181.mp3',
},
  {
    language: 'en-GB',
    final_script: 'xyz',
    created: '2017-02-21T09:57:31.942603Z',
    rating: 1,
    duration: 3283,
    url: 'https://s3.eu-central-1.amazonaws.com/linementor-upload-chromex/challenge/3921.mp3',
  }];
const error = 404;

describe('RecordingsList sagas', () => {
  let generator;
  describe('fetchRecordings', () => {
    beforeEach(() => {
      generator = fetchRecordings();

      expect(generator.next().value)
        .toEqual(call(recordingsApi.all));
    });

    it('should dispatch fetchRecordingsSuccess action if recordings is successfully received', () => {
      expect(generator.next({ results: list }).value)
        .toEqual(put(fetchRecordingsSuccess(list)));
    });

    it('should dispatch fetchRecordingsFailure action if error occurs', () => {
      expect(generator.throw(error).value)
        .toEqual(put(fetchRecordingsFailure(error)));
    });
  });
});
