import {
  SET_CURRENT,
} from './constants';

export const setCurrent = (current) => ({
  type: SET_CURRENT,
  current,
});
