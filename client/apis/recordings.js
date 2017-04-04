import { call } from 'utils/api';

const all = () => call({
  method: 'get',
  url: 'https://i2x-challenge.herokuapp.com/ai/recording/list/',
});

export default {
  all,
};
