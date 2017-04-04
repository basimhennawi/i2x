import { fromJS } from 'immutable';
import expect from 'expect';
import {
  selectRecordingsListDomain,
  selectRecordingsListStatus,
  selectRecsList,
} from '../selectors';

const status = {
  isLoading: false,
  success: false,
  error: null,
};
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
const initState = {
  status,
  list,
};
const mockedState = fromJS({
  RecordingsList: initState,
});

describe('RecordingsList selectors', () => {
  describe('selectRecordingsListDomain', () => {
    it('should select the recordings domain as immutable object', () => {
      expect(selectRecordingsListDomain()(mockedState)).toEqual(fromJS(initState));
    });
  });

  describe('selectRecordingsListStatus', () => {
    it('should select the recordings status as immutable object', () => {
      expect(selectRecordingsListStatus()(mockedState)).toEqual(fromJS(status));
    });
  });

  describe('selectRecsList', () => {
    it('should select the recordings list as immutable object', () => {
      expect(selectRecsList()(mockedState)).toEqual(fromJS(list));
    });
  });
});
