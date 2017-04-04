import {
  loadReducers as loadRecordingsListReducers,
  loadSagas as loadRecordingsListSagas,
} from 'components/RecordingsList/dependencies';

export const loadReducers = () => ({
  ...loadRecordingsListReducers(),
});

export const loadSagas = () => [
  ...loadRecordingsListSagas(),
];
