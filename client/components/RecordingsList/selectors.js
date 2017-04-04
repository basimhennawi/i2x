import { createSelector } from 'reselect';

export const selectRecordingsListDomain = () => (state) => state.get('RecordingsList');

export const selectRecordingsListStatus = () => createSelector(
  selectRecordingsListDomain(),
  (state) => state.get('status')
);

export const selectRecsList = () => createSelector(
  selectRecordingsListDomain(),
  (state) => state.get('list')
);

const selectRecordingsList = () => createSelector(
  selectRecordingsListStatus(),
  selectRecsList(),
  (status, list) => ({
    status: status.toJS(),
    list: list.toJS(),
  })
);

export default selectRecordingsList;
