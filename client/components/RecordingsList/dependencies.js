export const loadReducers = () => ({
  RecordingsList: System.import('components/RecordingsList/reducer'),
});

export const loadSagas = () => [
  System.import('components/RecordingsList/sagas'),
];
