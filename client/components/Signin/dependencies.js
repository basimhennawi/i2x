export const loadReducers = () => ({
  Signin: System.import('components/Signin/reducer'),
});

export const loadSagas = () => [
  System.import('components/Signin/sagas'),
];
