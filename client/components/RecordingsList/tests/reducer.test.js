import expect from 'expect';
import { fromJS } from 'immutable';
import reducer from '../reducer';
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
const initialState = fromJS({
  status: {
    isLoading: false,
    success: false,
    error: null,
  },
  list: [],
});

describe('RecordingsList reducer', () => {
  it('should return recordings list initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should return fetch recordings request state', () => {
    expect(reducer(initialState, {
      type: FETCH_RECORDINGS,
    })).toEqual(
      initialState.mergeIn(['status'], {
        isLoading: true,
        success: false,
        error: null,
      })
    );
  });

  it('should return fetch recordings success state', () => {
    expect(reducer(initialState, {
      type: FETCH_RECORDINGS_SUCCESS,
      list,
    })).toEqual(
      initialState.mergeIn(['status'], {
        isLoading: false,
        success: true,
      })
      .set('list', fromJS(list))
    );
  });

  it('should return fetch recordings error state', () => {
    expect(reducer(initialState, {
      type: FETCH_RECORDINGS_FAILURE,
      error,
    })).toEqual(
      initialState.mergeIn(['status'], {
        isLoading: false,
        error,
      })
    );
  });
});
