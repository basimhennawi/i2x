import { fromJS } from 'immutable';
import {
  DEFAULT_LOCALE,
  SET_CURRENT,
} from './constants';

const localeInitialState = fromJS({
  current: DEFAULT_LOCALE,
});

export default (state = localeInitialState, action) => {
  switch (action.type) {

    case SET_CURRENT:
      return state.set('current', action.current);

    default:
      return state;
  }
};
